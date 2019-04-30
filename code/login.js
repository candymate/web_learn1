
const crypto = require("crypto");
const { User } = require("../models");

module.exports = (router) => {
  router.get("/login", (req, res) => {
    res.render("login");
  });
  
  router.post("/login", (req, res) => {
    User.findAll({
      where: {
        userID: req.body.id,
        password_hash: crypto.createHash("sha256").update(req.body.password).digest("hex")
      }
    }).then(function(result) {
      console.log(result);
      if(result.length == 0) {
        res.send("Failed<br><a href=\"/login\">Back to login page</a>");
      }
      else {
        res.send("Success<br><a href=\"/\">Back to main page</a>");
      }
    });
  });
}
