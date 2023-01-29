const googleRouter = require('express').Router();
const passport = require('passport');

require('../passport')

// -----------Google Authentication---------------------------------------------
googleRouter.get('/', (req, res) => {
    res.send("<button><a href='/google/auth'>Login With Google</a></button>")
});

//Routes
googleRouter.get('/auth', passport.authenticate('google', { scope: ['profile', 'email'] }));


googleRouter.get('/auth/callback', passport.authenticate('google',{
    successRedirect: '/google/auth/callback/success',
    failureRedirect: '/google/auth/callback/failure'
}),
 
);
// Success
googleRouter.get('/auth/callback/success' , (req , res) => {
    if(!req.user)
    res.redirect('/google/auth/callback/failure');
    res.send("Welcome " + req.user.email +"<button><a href='/google/logout'>Login With Google</a></button>"  );
});
     
googleRouter.get('/logout', (req, res) => {
    req.session=null
    req.logout();
    res.redirect('/google/auth');
})
    // failure
googleRouter.get('/auth/callback/failure' , (req , res) => {
    res.send("Error");
})
// --------------------------Google Authentication End's------------------------

module.exports = googleRouter