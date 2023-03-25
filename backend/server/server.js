const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/hello", (req, res) => {
  res.send("Hello, World!");
});

app.get("/res", (req, res) => {
  res.json({ Name: "SR" });
});

// Catch-all route
app.get("*", (req, res) => {
  res.status(404).send("404 Error: Page not found");
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
