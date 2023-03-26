const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const notes = [];

app.get("/hello", (req, res) => {
  res.send("Hello, World!");
});

app.get("/res", (req, res) => {
  res.json({ Name: "SR" });
});

app.post("/text", (req, res) => {
  const note = req.body.note;
  notes.push(note);
  res.status(200).send("Note received");
});

app.get("/notes", (req, res) => {
  res.json({ notes: notes });
});

app.delete("/delete", (req, res) => {
  const index = req.body.index;
  if (index >= 0 && index < notes.length) {
    notes.splice(index, 1);
    res.status(200).send("Note deleted");
  } else {
    res.status(404).send("Note not found");
  }
});

app.delete("/deleteallnotes", (req, res) => {
  notes.splice(0, notes.length);
  res.status(200).send("All notes deleted");
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
