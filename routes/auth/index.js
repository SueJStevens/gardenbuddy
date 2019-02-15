const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const passport = require("passport");
var crypto = require("crypto");
var async = require("async");
var sgMail = require("@sendgrid/mail");
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

//! PASSWORD RESET BELOW

//when the user submits a password reset request
router.post("/forgot", function(req, res) {
  //do this async so we dont have so many callbacks
  async.waterfall([
    function(done) {
      //create a random token to give the user so they can reset their password
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString("hex");
        done(err, token);
      });
    },
    function(token, done) {
      var email = req.body.email;
      console.log(email);
      //find the user in the db by their email
      db.user.findOne({ where: { email: email } }).then(function(dbResult) {
        //let the user know if there are no accounts with that email
        if (!dbResult) {
          req.flash("error", "No account with that email address exists.");
          return res.redirect("/login");
        }

        //set the token to the user object and make it expire in 1 hour
        dbResult.resetPasswordToken = token;
        dbResult.resetPasswordExpires = Date.now() + 3600000;

        // eslint-disable-next-line no-unused-vars
        dbResult.save(function(err) {
          // done(err, token, user);
        });
        //call the next function
        sendEmail(token, dbResult, done);
      });
    }
  ]);

  //this is the function to send mail with SendGrid
  function sendEmail(token, user, done) {
    //set our API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    //create our message content
    var msg = {
      to: user.email,
      from: "koolskooltool@gmail.com",
      subject: "Kool Skool Tool Password Reset",
      text:
        "You are receiving this because you (or someone else) have requested the reset of the password for your Kool Skool Tool account.\n\n" +
        "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
        //this is creating the url with the users token to reset their password
        "http://" +
        req.headers.host +
        "/reset/" +
        token +
        "\n\n" +
        "If you did not request this, please ignore this email and your password will remain unchanged.\n"
    };
    //send the email with the above message
    sgMail.send(msg, function(err) {
      if (err) {
        return console.log(err);
      }

      done(err, "done");
    });
  }
});

//get the proper page for the specified user to reset their password
router.get("/reset/:token", function(req, res) {
  //find the user in the database based on their token and only if it is not expired
  db.user
    .findOne({
      where: {
        resetPasswordToken: req.params.token,
        resetPasswordExpires: { $gt: Date.now() }
      }
    })
    //then if there is no user, let the person know
    .then(function(user) {
      if (!user) {
        console.log("error", "Password reset token is invalid or has expired.");
        return res.redirect("/forgot");
      }
      //now show the reset page with the users name
      res.render("reset", {
        user: user
      });
    });
});

//when the user submits their new password
router.post("/reset", function(req, res) {
  //find the user based off the email they provided
  db.user
    .findOne({ where: { email: req.body.reset_pass_email } })
    //then store their new password in a hash
    .then(function(dbUser) {
      var generateHash = function(password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };
      //store the hashed pass in a variable
      var updatedPass = generateHash(req.body.reset_password);
      //if there is no user with the provided email, let the user know
      if (!dbUser) {
        console.log("No User Found");
      } else {
        //otherwise update their password with the new password
        dbUser.updateAttributes({
          password: updatedPass
        });
        //take the user to the login page once pass is updated.
        res.render("login");
      }
    });
});

module.exports = router;
