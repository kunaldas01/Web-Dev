import express, { query } from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Setup postgres connection
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "ces365",
  port: 5432
});

db.connect();

async function getVisited() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  const countries = [];
  result.rows.forEach(country => {
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  const countries = await getVisited();
  res.render("index.ejs", { total: countries.length, countries: countries });
});

app.post("/add", async (req, res) => {
  const country = req.body.country;
  try {
    let result = await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%'", [country.toLowerCase()]);
    if (result.rows.length > 1) {
      result = await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) = $1", [country.toLowerCase()]);
    }

    const code = result.rows[0].country_code;
    try {
      await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [code]);
      res.redirect("/");
    } catch (err) {
      console.log(err);
      const countries = await getVisited();
      res.render("index.ejs", { total: countries.length, countries: countries, error: "Country has already been added, try again." });
    }
  } catch (err) {
    console.log(err);
    const countries = await getVisited();
    res.render("index.ejs", { total: countries.length, countries: countries, error: "Country name does not exist, try again." });
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
