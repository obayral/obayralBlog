var express = require('express');
var expressValidator = require('express-validator');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;
var route = require('./routes/routes');
const path = require('path');
const config = require('./config/database');
var sm =  require('sitemap');

/*mongoose.connect(config.database, { useNewUrlParser: true }, (err) => {
  if (err) {
      console.log("Connection Failed" + err);
  }
  else {
      console.log("Connection Sucessful");
  }
});*/
var sitemap = sm.createSitemap ({
    hostname: 'https://obayral.herokuapp.com/',
    cacheTime: 600000,        // 600 sec - cache purge period
    urls: [
      { url: '/about/',  changefreq: 'daily', priority: 1.0 },
      { url: '/aiesec/',  changefreq: 'monthly',  priority: 0.8 },
      { url: '/bilkent/',  changefreq: 'monthly',  priority: 0.8 },
      { url: '/canada/',  changefreq: 'monthly',  priority: 0.8 },
      { url: '/china/',  changefreq: 'monthly',  priority: 0.8 },
      { url: '/contact/',  changefreq: 'weekly',  priority: 0.8},
      { url: '/home/',  changefreq: 'weekly',  priority: 0.9},
      { url: '/icbc/',  changefreq: 'weekly',  priority: 0.9},
      { url: '/italy/',  changefreq: 'weekly',  priority: 0.9}
    ]
  });
  app.get('/sitemap.xml', function(req, res) {
    sitemap.toXML( function (err, xml) {
        if (err) {
          return res.status(500).end();
        }
        res.header('Content-Type', 'application/xml');
        res.send( xml );
    });
  });

app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.use(expressValidator());
app.use(route);

app.use(express.static(__dirname + '/public'));


app.listen(PORT,function(){
    console.log("Server is listening at " + PORT ); 
});
