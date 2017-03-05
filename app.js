// 引入模块
var express = require('express');
var path = require('path');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var http = require('http');
var user = require('./server/controller/welcome');

// 新建 express 实例
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var router = express.Router();
// app.set('port', process.env.PORT || 3000);

// 对所有(/)URL或路由返回index.html
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/api/getUsers', user.list);
app.post('/api/registerUser', user.add);

// 设置views路径和模板
app.set('views', './client/view');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// 静态文件配置
app.use('/client/static', express.static(path.join(__dirname, 'client/static')));

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });
//
// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });

// 启动一个服务，监听从8000端口进入的所有连接请求
app.listen(8000, function(){
    console.log('一切准备就绪……');
    console.log('正在监听---http://127.0.0.1:8000');
});