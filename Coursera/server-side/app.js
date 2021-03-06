var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");
var fileStore = require("session-file-store")(session);
var password = require("passport");
var authenticate = require("./authenticate");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var dishRouter = require("./routes/dishRouter");
var promoRouter = require("./routes/promoRouter");
var leadersRouter = require("./routes/leaderRouter");
const uploadRouter = require("./routes/uploadRouter");

var mongoose = require("mongoose");
var url = "mongodb://localhost:27017/consFusion";

mongoose
  .connect(url)
  .then((db) => {
    console.log("Connected Correctly to Database");
  })
  .catch((err) => {
    console.log(err);
  });

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser("12345-67890-09876-54321"));
app.use(
  session({
    name: "session-id",
    secret: "12345-67890-09876-54321",
    resave: false,
    saveUninitialized: false,
    store: new fileStore(),
  })
);

app.use(password.initialize());
app.use(password.session());

app.use("*", (req, res, next) => {
  if (req.secure) return next();
  else {
    res.redirect(
      307,
      "https://" + req.hostname + ":" + app.get("secPort") + req.url
    );
  }
});

app.use("/", indexRouter);
app.use("/users", usersRouter);

const auth = (req, res, next) => {
  if (!req.user) {
    var err = new Error("You are NOT authenticated");
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 403;
    next(err);
  } else {
    next();
  }
};

app.use(auth);
app.use(express.static(path.join(__dirname, "public")));

app.use("/dishes", dishRouter);
app.use("/promotions", promoRouter);
app.use("/leaders", leadersRouter);
app.use("/imageUpload", uploadRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
