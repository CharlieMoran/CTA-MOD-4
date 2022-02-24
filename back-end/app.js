// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const bananaController = require("./controllers/bananaController.js")


// CONFIGURATION
const app = express();
const config = {
  views: "views",
  static: "public",
  logging: true,
}

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES

const main = require("./routes/main")
app.use("/", main)

const db = require("./db/dbConfig.js");


app.get("/", (req, res)=>{
    res.send(`Welcome to Banana shop!`);
});

app.use("/snacks", snacksController)

app.get("*", (req,res)=>{
    res.status(404).json({error: "Page not found"})
});

module.exports = app;