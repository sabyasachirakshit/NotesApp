const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello, World!");
});

app.get("/res", (req, res) => {
  res.json({ Name: "SR" });
});

app.post("/text", (req, res) => {
  const note = req.body.note;
  console.log(note);
  res.status(200).send("Note received");
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
