
const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

// / route
router.get("/", (req, res) => {
  res.render("main");
});

// /register route
require("./register")(router);

// /login route
require("./login")(router);

module.exports = router;

