const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact"
);

const db = require('./models');
const { Article } = db


// Route definitions
app.post("/api/saved", (req, res) => {
  var article = req.body
    Article.create(article)
    .then(() => {
      res.json(article)
    })
    .catch((err) => {
      res.json(err)
    })
});

app.get("api/saved", (req, res) => {
  Article.find({}).then(articles => res.json(articles))
})


// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
