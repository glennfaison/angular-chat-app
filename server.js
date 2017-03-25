/**
 * Created by abhiroop on 5/6/14.
 */
var express = require('express'),
  http = require('http'),
  passport = require('passport'),
  morgan = require('morgan'),
  compress = require('compression'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  LocalStrategy = require('passport-local').Strategy,
  serverStatic = require('serve-static');

var app = express();
app.use(morgan());
app.use(compress());
app.use(bodyParser());


app.use(methodOverride());
app.use(cookieParser());

app.use('/', serverStatic(__dirname + '/app'));

var port = process.env.PORT || 8000;
app.listen(port);
console.log('Please go to http://localhost:' + port);