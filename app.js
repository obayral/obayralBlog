var express = require('express');
var expressValidator = require('express-validator');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;
var route = require('./routes/routes');
const path = require('path');
const config = require('./config/database');


mongoose.connect(config.database, { useNewUrlParser: true }, (err) => {
  if (err) {
      console.log("Connection Failed" + err);
  }
  else {
      console.log("Connection Sucessful");
  }
});

app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.use(expressValidator());
app.use(route);

app.use(express.static(__dirname + '/public'));


app.listen(PORT,function(){
    console.log("Server is listening at " + PORT ); 
});
