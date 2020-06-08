const express = require("express");
const app = express();

app.use(express.static("js"));

app.get("/", (req, res) => {
  return res.sendFile("index.html", { root: __dirname });
});

app.listen("8080", () => {
  console.log("End to End testing example app is running");
});
