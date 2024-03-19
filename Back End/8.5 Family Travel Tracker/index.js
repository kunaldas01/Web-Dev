import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "family_travel_tracker",
  password: "ces365",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;

let users = [];

async function getVisisted() {
  const result = await db.query("SELECT country_code FROM visited_country JOIN user_detail ON user_detail.id = visited_country.user_id WHERE user_id=$1", [currentUserId]);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

async function getCurrentUser() {
  const result = await db.query("SELECT * FROM user_detail");
  users = result.rows;
  return users.find((user) => user.id == currentUserId);
}

app.get("/", async (req, res) => {
  const countries = await getVisisted();
  const currentUser = await getCurrentUser();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: currentUser.color,
  });
});

app.post("/add", async (req, res) => {
  const country = req.body.country;

  try {
    let result = await db.query("SELECT country_code FROM country WHERE LOWER(country_name) LIKE '%' || $1 || '%';", [country.toLowerCase()]);
    if (result.rows.length > 1) {
      result = await db.query("SELECT country_code FROM country WHERE LOWER(country_name) = $1", [country.toLowerCase()]);
    }

    const countryCode = result.rows[0].country_code;
    try {
      await db.query("INSERT INTO visited_country (user_id, country_code) VALUES ($1, $2)", [currentUserId, countryCode]);
      res.redirect("/");
    } catch (err) {
      console.log(err);
      const countries = await getVisisted();
      const currentUser = await getCurrentUser();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        users: users,
        color: currentUser.color,
        error: "Country has already been added, try again."
      });
    }
  } catch (err) {
    console.log(err);
    const countries = await getVisisted();
    const currentUser = await getCurrentUser();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      users: users,
      color: currentUser.color,
      error: "Country name does not exist, try again."
    });
  }
});

app.post("/user", async (req, res) => {
  if (req.body.add === "new") {
    res.render("new.ejs");
  }
  else {
    currentUserId = req.body.user;
    res.redirect("/");
  }
});

app.post("/new", async (req, res) => {
  const name = req.body.name;
  const color = req.body.color;

  const result = await db.query(
    "INSERT INTO user_detail (name, color) VALUES($1, $2) RETURNING *;",
    [name, color]
  );

  const id = result.rows[0].id;
  currentUserId = id;

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
