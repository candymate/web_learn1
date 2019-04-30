
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
    }).then(function (item) {
      res.send("Success<br><a href=\"/\">Back to main</a>");
    }).catch(function (err) {
      res.send("Error<br><a href=\"/register\">Back to register</a>");
    });
  });
}
