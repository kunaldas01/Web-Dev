import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "ces365",
  port: 5432
});

db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, password], (err) => {
    if (err) {
      res.send("User already exists!");
      console.log("Error executing query: ", err.stack);
    } else {
      res.render("secrets.ejs");
    }
  });
});

app.post("/login", (req, res) => {
  const email = req.body.username;
  const upassword = req.body.password;

  db.query("SELECT * FROM users WHERE email=$1", [email], (err, result) => {
    if (result.rows.length > 0) {
      const response = result.rows[0];
      if (response.password == upassword) {
        res.render("secrets.ejs");
      } else {
        res.send("Incorrect password!");
        console.log("Incorrect Password");
      }
    } else {
      res.send("User not found!");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
