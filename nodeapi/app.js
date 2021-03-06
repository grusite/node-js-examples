var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.engine("html", require("ejs").__express);

// Todo lo que tiene use es un middleware y se ejecutan de uno en uno
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//app.use('/pdf', express.static(path.join(__dirname, '/mnt/sda3/images/pdfs')));

/**
 * Crear conexion a la BBDD
 */
require("./lib/connectMongoose");
require("./models/Agentes");

app.use((req, res, next) => {
  // Una de dos cosas:
  //    - Responder
  //      res.send("ok");
  //    - O llamar a next()
  // console.log("Petición a ", req.originalUrl);
  // next(new Error("Cosa mala"));
  next();
});

/**
 * Rutas de mi API
 */
app.use("/apiv1/agentes", require("./routes/apiv1/agentes"));

// todo lo que esté dentro de .locals van a ser variables de la vista
app.locals.title = "NodeApi";

/**
 * Rutas de mi aplicacion web
 */
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // comprobamos error validacion query
  if (err.array) {
    // Error de validación
    err.status = 422;
    const errInfo = err.array({ onlyFirstError: true })[0];
    err.message = isAPI(req)
      ? { message: "Nor valid", errors: err.mapped() }
      : `Not valid - ${errInfo.param} ${errInfo.msg}`;
  }

  // render the error page
  res.status(err.status || 500);

  if (isAPI(req)) {
    res.json({ success: false, error: err.message });
    return;
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.render("error");
});

function isAPI(req) {
  return req.originalUrl.indexOf("/apiv") === 0;
}

module.exports = app;
