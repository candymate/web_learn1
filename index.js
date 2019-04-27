
const express = require("express");
const path = require("path")
const app = express();
const route = require("./code/route.js");

// setup renderer engine to pug and get views
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.set("views", path.join(__dirname, "views"));

app.use("/", route);

// port number
const port = 8000;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});

