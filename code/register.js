
module.exports = (router) => {
  router.get("/register", (req, res) => {
    res.render("register");
  });
  
  router.post("/register", (req, res) => {
    res.send("Success<br><a href=\"/\">Back to main</a>");
  });
}
