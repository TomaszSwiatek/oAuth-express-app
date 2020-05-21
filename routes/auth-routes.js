const router = require("express").Router(); //invoke express instance router

// auth login route
router.get("/login", (req, res) => {
  //we don't have to set first part of login path "..:3000/auth/login" becouse we will set this up next when we ll use that route exported to other file.

  //   render template when it goes to this route:
  res.render("login");
});

// auth logout route:
router.get("/logout", (req, res) => {
  // in future we ll handle it with passport.js
  res.send("Logging out");
});

// auth with google route:
router.get("/google", (req, res) => {
  //  this we should handle with passport.js to redirect to google sign in site.

  //   For now send message to the browser:
  res.send("logging in with google");
});

module.exports = router;
