var debug = require('debug')('shangyezixun');
var koa = require('koa');
// 加载数据库
var database = require('./lib/database.js')();
//配置文件
var config = require('./config/default');

var app = koa();

app.use(function * (next) {
    //config 注入中间件，方便调用配置信息
    if (!this.config) {
        this.config = config;
    }
    yield next;
});

//路由
var router = require('koa-router');
app.use(router(app));

//应用路由
var appRouter = require('./router/index');
appRouter(app);

app.listen(config.port);
console.log('listening on port %s', config.port);

module.exports = app;
