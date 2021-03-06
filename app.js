require('dotenv').load();

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const mongodb = require('mongodb');

const index = require('./routes/index');
const users = require('./routes/users');
const aboutMe = require('./routes/aboutMe');
const education = require('./routes/education');
const work = require('./routes/work');
const skill = require('./routes/skill');

const app = express();

//load mongoose
mongoose.Promise = global.Promise;

//connect to MongoDB 
mongoose.connect(process.env.MONGODB_URL, {useMongoClient: true})
    .then(()=> console.log('berhasil connect ke MongoDB'))
.catch((err)=> console.log(err));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'frontend')));

app.use('/', index);
app.use('/users', users);
app.use('/aboutme', aboutMe);
app.use('/education', education);
app.use('/work', work);
app.use('/skill', skill);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });


app.listen(PORT);

console.log('merlinda api RESTful API server start on: ' + PORT);

module.exports = app;
