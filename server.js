const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
  res.send("<p>this is the about page!</p>");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
