const express = require("express");
const ejs = require("ejs");

const webApp = express();
const port = 8080;

webApp.use(express.static('public'));
webApp.set('view engine','ejs');

// Main page
webApp.get('/', function (req, res) {
    res.render('index') ;
 });

// No JS version
webApp.get('/simplified', function (req, res) {
    res.render('nojs') ;
 });

// Handle 404
webApp.use(function(req, res) {
    res.render('404');
  });

webApp.listen(port)
console.log("Running on port: "+port)
