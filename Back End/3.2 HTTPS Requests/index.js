import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("Welcome to my page");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Details</h1><h2>Ph No: 130393939</h2><h2>Email Id: rupalisharma@gmail.com</h2>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About</h1><p>This is the about section of the page. This page contains information about the web page</p>");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});