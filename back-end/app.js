import createError from "http-errors";
import express from "express";
import path, { dirname } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { fileURLToPath } from "url";
//all links to routes
import routerLink from "./routes/linkResources/routeLinks.js";
import routerVideo from "./routes/videoResources/routesVideos.js";
import routerResources from "./routes/resourcesResources/routesResources.js";
// var usersRouter = require('./routes/users');
import cors from "cors";

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

//path to individual database
app.use("/links", routerLink);
app.use("/videos", routerVideo);
app.use("/resources", routerResources);


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

export default app;
