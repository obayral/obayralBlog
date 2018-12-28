var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var route = require('./routes/routes');
var path = require('path');

app.set('view engine','ejs');
app.use(route);
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT,function(){
    console.log("Server is listening at " + PORT ); 
});
