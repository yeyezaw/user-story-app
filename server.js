//Express module
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config');
var mongoose = require('mongoose');

mongoose.connect(config.database, function(err){
      if(err){
        console.log(err);
      }else{
        console.log('connected to database');
      }
});

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.listen(config.port, function(err){
      if(err){
        console.log(err);
      }else{
        console.log('server is running on port: ' + config.port);
      }
});
