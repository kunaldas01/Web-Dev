import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = process.env | 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "book_notes",
    password: "ces365",
    port: 5432
});

db.connect();

app.get("/", (req, res) => {
    db.query("SELECT * FROM book", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.render("index.ejs", { bookData: result.rows });
        }
    });
});

app.get("/new/:bookID", (req, res) => {
    const bID = req.params.bookID;
    if (bID != 0) {
        db.query("SELECT * FROM book WHERE id=$1", [bID], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.render("addbook.ejs", { bookData: result.rows[0] });
            }
        });
    }
    else {
        res.render("addbook.ejs");
    }
});

app.post("/addbook/:bookID", async (req, res) => {
    const bName = req.body['book-name'];
    const bAuthor = req.body['author'];
    const bISBN = req.body['isbn'];
    const bRating = req.body['rating'];
    const bDesc = req.body['description'];
    const bDate = req.body['date'];
    const bID = req.params.bookID;
    try {
        if (bID != 0) {
            await db.query("UPDATE book SET book_name=$1, author=$2, rating=$3, description=$4, isbn=$5 WHERE id=$6", [bName, bAuthor, bRating, bDesc, bISBN, bID]);
            res.redirect("/")
        }
        else {
            await db.query("INSERT INTO book (book_name, author, rating, time_read, description, isbn) VALUES ($1, $2, $3, $4, $5, $6)", [bName, bAuthor, bRating, bDate, bDesc, bISBN]);
            res.redirect("/");
        }
    } catch (err) {
        console.log(err);
    }
});

app.get("/delete/:bookID", async (req, res) => {
    const bID = req.params.bookID;
    try {
        await db.query("DELETE FROM book WHERE id=$1", [bID]);
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});