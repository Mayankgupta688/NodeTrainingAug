var express = require("express");
var path = require("path");
var passport = require("passport")
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

var app = express();

const USER = { id: 1, username: "mayank", password: "secret123"};

passport.use(
    new LocalStrategy((username, password, done) => {
        if(username == USER.username && password == USER.password) {
            return done(null, USER)
        }

        return(null, false, {message : "UnAuthorised User"})
    })
)

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    if(id == USER.id) {
        done(null, USER)
    } else {
        done(null, false);
    }
});

app.use(express.urlencoded({ extended: false}));
app.use(session({
    name: "sessionCookie",
    secret: "ajdgsajd", 
    resave: false, 
    saveUninitialized: false, 
    cookie: {
        maxAge: 60000 * 60 * 24
    }
}));
app.use(passport.initialize())
app.use(passport.session())

app.get("/", (req, res) => {
    if(req.isAuthenticated()) {
        res.sendFile(path.join(__dirname + "/public/home.html"))
    } else {
        res.sendFile(path.join(__dirname + "/public/login.html"))
    }
})

app.post("/login", passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login"
}))

app.post("/logout", (req, res) => {
    req.logOut(() => {
        res.redirect("/")
    })
})

app.get("/home", (req, res) => {
   res.sendFile(path.join(__dirname + "/public/home.html"))
})



app.listen(3000)

