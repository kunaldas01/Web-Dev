//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const password = "ILoveProgramming";
var userIsAuthorized = false;

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: true })); 
// Both are valid


// Custom middleware
function passwordCheck(req, res, next) {
    const userPassword = req.body["password"];
    if (userPassword === password) {
        userIsAuthorized = true;
    }
    else {
        userIsAuthorized = false;
    }
    next();
}

app.use(passwordCheck);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req, res) => {
    if (userIsAuthorized) {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        // res.sendFile(__dirname + "/public/index.html");
        res.redirect("/");
    }
})

app.listen(port, () => {
    console.log(`Listening from port: ${port}`);
})
