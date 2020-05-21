const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20"); //this string is same as package name npm.

passport.use(
  new GoogleStrategy(
    // options fot the google strategy:
    {}
  ),
  () => {
    //   passport callback function
  }
);
