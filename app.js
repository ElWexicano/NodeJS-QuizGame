var express = require('express');
var app = module.exports = express.createServer();
app.mongoose = require('mongoose');

var config = require('./config.js')(app, express);

var models = {};
models.Question = require('./models/question')(app.mongoose).model;
models.Score = require('./models/score')(app.mongoose).model;

require('./routes/index')(app, models);

app.listen(3000);
