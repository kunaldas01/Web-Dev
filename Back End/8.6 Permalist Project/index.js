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
  database: "permalist",
  password: "ces365",
  port: "5432"
});

db.connect();

async function getItems() {
  try {
    const result = await db.query("SELECT * FROM items ORDER BY id ASC");
    const items = result.rows;
    return items;
  } catch (err) {
    console.log(err);
  }
}

app.get("/", async (req, res) => {
  const items = await getItems();
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  try {
    await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.post("/edit", async (req, res) => {
  const itemID = req.body.updatedItemId;
  const itemTitle = req.body.updatedItemTitle;
  try {
    await db.query("UPDATE items SET title=$1 WHERE id=$2", [itemTitle, itemID]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.post("/delete", async (req, res) => {
  const itemID = req.body.deleteItemId;
  try {
    db.query("DELETE FROM items WHERE id=$1", [itemID]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
