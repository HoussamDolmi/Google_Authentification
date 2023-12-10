require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const authRoute= require("./routes/auth");
const cookieSession = require("cookie-session");
const session = require('express-session');
const passportStrategy = require("./passport");

const app = express();

app.use(session({
    secret: 'scdnmjonsohdbcihbjdnocjdn',
      resave: false,
      saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin:"http://localhost:3000",
        methods:"GET,POST,PUT,DELETE",
        credentials:true,
    })
);
app.use("/", authRoute);
app.get("/",(req,res)=>{
    res.send('<a href="/google">connect</a>')
})
 const port = process.env.PORT || 8080;
 app.listen(port,()=>console.log(`Listening on port ${port}`));