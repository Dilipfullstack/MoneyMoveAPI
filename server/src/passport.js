const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const config = require('./config/config');
 
passport.serializeUser((user , done) => {
done(null , user);
})
passport.deserializeUser(function(user, done) {
done(null, user);
});
 
passport.use(new GoogleStrategy({
clientID:config.googleClient_id, // Your Credentials here.
clientSecret:config.googleClient_secret, // Your Credentials here.
callbackURL:"http://localhost:3000/google/auth/callback",
passReqToCallback:true
},
function(request, accessToken, refreshToken, profile, done) {
console.log(profile);
return done(null, profile);
}
));