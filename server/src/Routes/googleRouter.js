const googleRouter = require('express').Router();
const passport = require('passport');
require('../passport')

// -----------Google Authentication---------------------------------------------
googleRouter.get('/', (req, res) => {
    res.send("<button><a href='/google/auth'>Login With Google</a></button>")
});

//Routes
googleRouter.get('/auth', passport.authenticate('google', { scope: ['profile', 'email'] }));
// app.get('/auth/error', (req, res) => res.send('Unknown Error'))

googleRouter.get('/auth/callback', passport.authenticate('google',{
    successRedirect: '/google/auth/callback/success',
    failureRedirect: '/google/auth/callback/failure'
    }),
 
);
// Success
googleRouter.get('/auth/callback/success' , (req , res) => {
    if(!req.user)
    res.redirect('/google/auth/callback/failure');
    res.send("Welcome " + req.user.email);
});
     
    // failure
googleRouter.get('/auth/callback/failure' , (req , res) => {
    res.send("Error");
})
// --------------------------Google Authentication End's------------------------

module.exports = googleRouter