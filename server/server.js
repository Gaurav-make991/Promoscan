
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// serve frontend

app.use(express.static(path.join(__dirname, "../Fontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Fontend/index.html"));
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${"http://localhost:5000"}`);
});