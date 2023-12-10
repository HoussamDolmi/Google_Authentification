const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");


passport.use(
    new GoogleStrategy(
        {
            clientID:"453018324848-nbo1vgkkmi0vtlhaqfmg35lgbjprbmqh.apps.googleusercontent.com",
            clientSecret:"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",
            callbackURL:"/auth/google/callback",
            scope:["profile","email"],
        },
        function(accessToken,refreshToken,profile,callback){
            callback(null,profile);
        }
    )
);
passport.serializeUser((user,done) => {
    done(null,user);
});
passport.deserializeUser((user,done)=>{
done(null,user);
});