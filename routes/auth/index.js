const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const passport = require("passport");
// var ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;

// this route is just used to get the user basic info
// eslint-disable-next-line no-unused-vars
// router.get("/user", (req, res, next) => {
//   console.log("===== user!!======");
//   console.log(req.user);
//   if (req.user) {
//     return res.json({ user: req.user });
//   } else {
//     return res.json({ user: null });
//   }
// });

// router.post(
//   "/login",
//   function(req, res, next) {
//     console.log(req.body);
//     console.log("================");
//     next();
//   },
//   passport.authenticate("local"),
//   (req, res) => {
//     console.log("POST to /login");
//     const user = JSON.parse(JSON.stringify(req.user)); // hack
//     const cleanUser = Object.assign({}, user);
//     if (cleanUser.local) {
//       console.log(`Deleting ${cleanUser.local.password}`);
//       delete cleanUser.local.password;
//     }
//     res.json({ user: cleanUser });
//   }
// );

// router.post("/logout", (req, res) => {
//   if (req.user) {
//     req.session.destroy();
//     res.clearCookie("connect.sid"); // clean up!
//     return res.json({ msg: "logging you out" });
//   } else {
//     return res.json({ msg: "no user to log out!" });
//   }
// });

router.post("/signup", (req, res) => {
  User.register(
    new User({
      username: req.body.username,
      phone: req.body.phone,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      zipcode: req.body.zipcode,
      city: req.body.city,
      st: req.body.st,
      aboutme: req.body.aboutme,
      profilepic: req.body.profilepic,
      coverphoto: req.body.coverphoto
    }),
    req.body.password,
    function(err, user) {
      if (err) {
        console.log("Error registering user!", err);
        return next(err);
      }

      console.log(`User ${req.body.username} registered!`);
      res.json(user);
      // res.redirect("/profile");
    }
  );
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json(req.user);
});

router.get("/logout", (req, res) => {
  console.log("logging out");
  console.log(req);
  req.logout();
  // console.log(req);
  res.json(req.user);
  // console.log(req);
});

router.get("/user", (req, res) => {
  res.json(req.user);
});

module.exports = router;
