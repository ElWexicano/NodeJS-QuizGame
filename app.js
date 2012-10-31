/*
    Application File 
    Author  : Shane Doyle
    Date    : 30/10/2012
    This file is used to run the application.
*/
var express = require("express");
var app = module.exports = express();
app.mongoose = require("mongoose");

var config = require("./config.js")(app, express);

var models = {};
models.Question = require("./models/question")(app.mongoose).model;
models.Score = require("./models/score")(app.mongoose).model;

require("./routes/routes")(app, models);

app.listen(3000);
