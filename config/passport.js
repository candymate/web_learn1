
//working on
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('./user');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => { 
    done(null, user); 
  });

  passport.use(new LocalStrategy({ 
    usernameField: 'id',
    passwordField: 'pw',
    session: true, 
    passReqToCallback: false,
  }, (id, password, done) => {
    Users.findOne({ id: id }, (findError, user) => {
      if (findError) return done(findError);
      if (!user) return done(null, false, { message: "ID doesn't exists" });
      return user.comparePassword(password, (passError, isMatch) => {
        if (isMatch) {
          return done(null, user);
        }
        return done(null, false, { message: "Wrong Password!" }); 
      });
    });
  }));
};
