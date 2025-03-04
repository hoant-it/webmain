
const dotenv = require("dotenv");
dotenv.config();


var createError = require("http-errors");
var express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const compression = require("compression"); //nen file

const mainRouter = require("./routes/main.router");
const VNWCRouter = require("./routes/WCVN.Router");
const khoRouter = require("./routes/kho.router");
const adminRouter = require("./routes/admin.router");
const kythuatRouter = require("./routes/kithuat.router");
const sanxuatRouter = require("./routes/sanxuat.router");
const catRouter = require("./routes/Cat.Router");
const mayRouter = require("./routes/May.Router");
const kiemphamRouter = require("./routes/kiempham.router");
var app = express();
app.use(compression());

// view engine setup
// console.log(path.join(__dirname, "views"))
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", path.join(__dirname, "views/layouts/main"));
// app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.CookieParser));
app.use(express.static(path.join(__dirname, "public")));

//router use
app.use("/", mainRouter);
app.use("/VNWC", VNWCRouter);
app.use("/kho", khoRouter);
app.use("/admin", adminRouter);
app.use("/kithuat", kythuatRouter);
app.use("/SX", sanxuatRouter);
app.use("/Cat", catRouter);
app.use("/May", mayRouter);
app.use("/kiempham", kiemphamRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // console.log(req.app.get("env"));
  // set locals, only providing error in development
  var env =process.env.NODE_ENV
  res.locals.message = err.message;
  res.locals.error = env === "development" ? err : {};
  // res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render(err.status);
  // next(createError(404));
});

module.exports = app;
