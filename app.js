var express = require('express');
var app = module.exports = express.createServer();
app.mongoose = require('mongoose');

var config = require('./config.js')(app, express);

var models = {};
models.questions = require('./models/question')(app.mongoose).model;
models.scores = require('./models/score')(app.mongoose).model;

require('./routes/index')(app, models);

app.listen(3000);