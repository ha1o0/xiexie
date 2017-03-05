var express = require('express');
var path = require('path');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var http = require('http');

var welcome = require('./server/controller/welcome');

var app = express();
app.set('port', 8000);
// view engine setup
app.set('views', path.join(__dirname, 'client/static'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'client/static')));

// 定义所有的增删改查的借口
var router = express.Router();
app.use(router);
router.get('/', function(req, res) {
    res.render('index');
});

app.get('/api/getUsers', welcome.list);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
})

module.exports = app;
