const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const PORT = 6000;

app.listen(PORT, () => {
  console.log("App listening on port ", PORT);
});

app.get("/", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "index.html"));
  res.render("index");
});

app.get("/profile", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "profile.html"));
  res.render("profile");
});

app.get("/math", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "math.html"));
  res.render("math");
});

app.get("/profile2 ", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "profile.html"));
  res.render("profile2");
});

app.get("/slide-show", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "slide-show.html"));
  res.render("slide-show");
});

app.get("/terms", (req, res) => {
  res.render("terms");
});

app.get("/policy", (req, res) => {
  res.render("policy");
});