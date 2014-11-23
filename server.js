'use strict';
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var uriUtil = require('mongodb-uri');
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } } };
var mongodbUri = process.env.MONGOLAB_URI;
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongooseUri || 'mongodb://localhost/test', options);

var app = express();
app.set('port', (process.env.PORT || 3000));

app.use(bodyparser.json());
app.use(express.static(__dirname + '/public'));

//routes


app.listen(app.get('port'));
