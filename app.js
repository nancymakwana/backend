var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userrouter=require('./routes/user_routes');
var deliverymanrouter=require('./routes/deliveryman_routes');
var categoryrouter=require('./routes/category_routes');
var productrouter=require('./routes/product_routes');
var orderrouter=require('./routes/order_routes');
var Imagerouter=require('./routes/img_routes');
var deliveryrouter=require('./routes/delivery_routes');
var Loginrouter=require('./routes/login_routes');
var Deliveryassignrouter=require('./routes/deliveryassign');
var notassignrouter=require('./routes/notassign_routes');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/customer',userrouter);
app.use('/deliveryman',deliverymanrouter);
app.use('/category',categoryrouter);
app.use('/product',productrouter);
app.use('/order',orderrouter);
app.use('/img',Imagerouter);
app.use('/delivery',deliveryrouter);
app.use('/login',Loginrouter);
app.use('/deliveryviewmore',Deliveryassignrouter);
app.use('/notassign',notassignrouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
