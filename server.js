// 引入模块
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var user = require('./server/controller/welcome');
var article = require('./server/controller/article');
// 新建 express 实例
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.set('port', process.env.PORT || 3000);
// solve the problem about cors
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200); /让options请求快速返回/
    }
    else {
        next();
    }
});
app.get('/api/getUsers', user.list);
app.post('/api/registerUser', user.add);
app.post('/api/saveArticle', article.add);

// 启动一个后台api服务，监听从8001端口进入的所有连接请求
app.listen(8001, function() {
    console.log('一切准备就绪……');
    console.log('正在监听后台api---http://127.0.0.1:8001');
});