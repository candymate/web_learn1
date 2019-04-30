
const crypto = require("crypto");
const { User } = require("../models");

module.exports = (router) => {
  router.get("/register", (req, res) => {
    res.render("register");
  });
  
  router.post("/register", (req, res) => {
    User.create({
      userID: req.body.id,
      password_hash: crypto.createHash("sha256").update(req.body.password).digest("hex")
    });
    res.send("Success<br><a href=\"/\">Back to main</a>");
  });
}
