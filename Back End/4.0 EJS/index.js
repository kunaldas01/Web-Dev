import express from "express";


const app = express();
const port = 3000;

const today = new Date();
// const today = new Date("September 25, 2023 10:43:10");
const day = today.getDay();

let dayType = "weekday";
let advice = "it's time to work hard."

if (day === 0 || day === 6) {
    dayType = "weekend";
    advice = "it's time to have some fun."
}

app.get("/", (req, res) => {
    res.render("index.ejs", {
        dayType: dayType,
        advice: advice
    });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})


