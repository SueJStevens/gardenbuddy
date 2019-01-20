// // eslint-disable-next-line no-unused-vars
// var db = require("../models");
// //load bcrypt to encrypt the password
// var bCrypt = require("bcrypt-nodejs");

// //all of this will be exported for external use
// module.exports = function(passport, User) {
//   //this will be the strategy we use for passport
//   var LocalStrategy = require("passport-local").Strategy;

//   // used to deserialize the user
//   passport.serializeUser(function(user, done) {
//     done(null, user.id);
//   });

//   // used to deserialize the user
//   passport.deserializeUser(function(id, done) {
//     User.findById(id).then(function(user) {
//       if (user) {
//         done(null, user.get());
//       } else {
//         done(user.errors, null);
//       }
//     });
//   });

//   // this will be the strategy used when signing up new users
//   passport.use(
//     "local-signup",
//     new LocalStrategy(
//       //we are renaming passports standard fields with our columns email and password
//       {
//         usernameField: "email",
//         passwordField: "password",
//         passReqToCallback: true // allows us to pass back the entire request to the callback
//       },

//       function(req, email, password, done) {
//         //encrypt the users password
//         var generateHash = function(password) {
//           return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
//         };

//         //look for any users that already have that email
//         User.findOne({ where: { email: email } }).then(function(user) {
//           // if there is a user with that email, tell them the email is taken
//           if (user) {
//             return done(null, false, {
//               message: "That email is already taken"
//             });
//           }
//           //otherwise we will create the user in our db
//           else {
//             var userPassword = generateHash(password);
//             console.log("REQ: " + req.body.personnel_select);
//             var personnel_id_split = req.body.personnel_select.split(/(\d+)/);
//             var personnelId = parseInt(personnel_id_split[1]);
//             console.log(personnel_id_split);
//             var data = {
//               email: email,
//               password: userPassword,
//               first_name: req.body["first-name"],
//               last_name: req.body["last-name"],
//               use_mode: req.body.use_mode,
//               personnel_id: personnelId
//             };

//             User.create(data).then(function(newUser) {
//               if (!newUser) {
//                 return done(null, false);
//               }

//               if (newUser) {
//                 return done(null, newUser);
//               }
//             });
//           }
//         });
//       }
//     )
//   );

//   // this will be the strategy used when logging in new users
//   passport.use(
//     "local-login",
//     new LocalStrategy(
//       {
//         // by default, local strategy uses username and password, we will override with email and password again
//         usernameField: "email",
//         passwordField: "password",
//         passReqToCallback: true // allows us to pass back the entire request to the callback
//       },

//       function(req, email, password, done) {
//         //store the user
//         //function to check that the password is comparable to any passwords in our db
//         var isValidPassword = function(userpass, password) {
//           return bCrypt.compareSync(password, userpass);
//         };
//         //look for a user with a matching email
//         User.findOne({ where: { email: email } })
//           .then(function(user) {
//             //if there are no users with this login email, let the user know
//             if (!user) {
//               return done(null, false, { message: "Email does not exist" });
//             }

//             //if the password,once ran through our function, doesnt match any, let the user know
//             if (!isValidPassword(user.password, password)) {
//               return done(null, false, { message: "Incorrect password." });
//             }

//             var userinfo = user.get();

//             //if we find the user, return their information
//             return done(null, userinfo);
//           })
//           .catch(function(err) {
//             //let the user know if there were any more errors
//             console.log("Error:", err);

//             return done(null, false, {
//               message: "Something went wrong with your Login"
//             });
//           });
//       }
//     )
//   );
// };
