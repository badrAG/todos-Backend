const express = require("express");
const todoRoutes = require("./routes/todo.route")
const listRoutes = require("./routes/list.route")
const cors = require("cors");
require("dotenv").config();

// Start express app
const app = express();

// Implement CORS
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ------------ ROUTES ------------
// Home Route
app.get("/", (_, res) => {
  res.send("Todos API");
});
//use routes
app.use("/api/v1/todos", todoRoutes);
app.use("/api/v1/list", listRoutes);


// Server not find (404)
app.all("*", (req, _, next) =>
  next(new Error(`Can't find ${req.originalUrl} on this server!`, 404))
);

module.exports = app;
