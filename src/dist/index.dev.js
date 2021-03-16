"use strict";

var _require = require('express'),
    request = _require.request,
    response = _require.response;

var express = require('express');

var app = express();
app.get('/', function (request, response) {
  return response.json({
    message: "Hello Gui"
  });
});
app.listen(9000, function () {
  console.log('App is running...');
});