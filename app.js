express = require("express");

app = express();

// set up express view engine:
app.set("view engine", "ejs");

// set connection and entry point:

app.listen(3000, () => {
  console.log("express now is listening on port 3000");
});

// set main (route of page:
app.get("/", (req, res) => {
  res.render("home"); //express automATICALLY KNOW THAT HAVE TO SEARCH  this template in views dir.
});
