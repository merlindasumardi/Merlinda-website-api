var express = require('express');
app = express();
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

port = process.env.PORT || 3000;

app.listen(port);

console.log('merlinda api RESTful API server start on' + port);