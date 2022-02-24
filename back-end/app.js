// DEPENDENCIES
const cors = require("cors");
const express = require("express");

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

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////
const db = require("./db/dbConfig.js");

app.get("/test", async (req, res) => {
  try {
    const allDays = await db.any("SELECT * FROM test");
    res.json(allDays);
  } catch (err) {
    res.json(err);
  }
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////

// EXPORT
module.exports = app;
