import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = "lonechacha22";
const yourPassword = "werb123";
const yourAPIKey = "3b9a9d67-82b7-48e4-b167-2c20baadfd64";
const yourBearerToken = "c7ff11dc-3158-4154-8a2c-3a011b4f910d";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

// No Authentication
app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "random");
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  }

  catch (error) {
    console.log("Failed to make request", error.message);
    res.render("index.ejs", { content: error.message });
  }
});


// Basic Authentication
app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  }

  catch (error) {
    console.log("Failed to make request", error.message);
    res.render("index.ejs", { content: error.message });
  }
});


// API Key Authorization
app.get("/apiKey", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "filter", {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  }
  catch (error) {
    console.log("Failed to make request", error.message);
    res.render("index.ejs", { content: error.message });
  }
});


// Bearer Token Authentication
app.get("/bearerToken", async (req, res) => {
  const config = {
    headers: {
      Authorization: `Bearer ${yourBearerToken}`
    }
  };

  try {
    const response = await axios.get(API_URL + "secrets/1", config);
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  }

  catch (error) {
    console.log("Failed to make request", error.message);
    res.render("index.ejs", { content: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
