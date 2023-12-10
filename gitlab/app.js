const passport = require('passport');
const GitLabStrategy = require('passport-gitlab2').Strategy;
const express = require('express');
const router=express.Router();
require('dotenv').config();

passport.use(
    new GitLabStrategy(
        {
            clientId : process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL:process.env.CLIENT_URL,
        },
        function(accessToken,refreshToken,profile,callback){
            callback(null,profile);
        }
        
    )
)
passport.serializeUser((user,done) => {
    done(null,user);
});
passport.deserializeUser((user,done)=>{
done(null,user);
});
const port = process.env.PORT || 8080;
app.listen(port,()=>console.log(`Listening on port ${port}`));