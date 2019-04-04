var indexRouter = require('./subRoutes/index');
var userRouter = require('./subRoutes/user');
var searchRouter = require('./subRoutes/search');
var cartRouter = require('./subRoutes/cart');

module.exports = function(app) {
    //设置跨域访问  
    // app.all('*', function(req, res, next) {
    //     res.header('Access-Control-Allow-Origin', '*');
    //     res.header("Access-Control-Allow-Headers", "X-Requested-With");
    //     res.header('Access-Control-Allow-Methods', '*');
    //     res.header("X-Powered-By", ' 3.2.1');
    //     res.header('Content-Type', 'application/json;charset=utf-8');
    //     next();
    // });

    app.use('/', indexRouter);
    app.use('/search', searchRouter);
    app.use('/cart', cartRouter);
    app.use('/user', userRouter);

}