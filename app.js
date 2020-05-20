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
var userloginrouter=require('./routes/user/loginuser_routes');
var signuprouter=require('./routes/user/signup_routes');
var emailrouter=require('./routes/email_routes');
var prodrouter=require('./routes/user/pro_routes');
var cartrouter=require('./routes/user/cart_routes');
var searchrouter=require('./routes/user/search_routes');
var deletecartrouter=require('./routes/user/deletecart_routes');
 var updateprorouter=require('./routes/user/updatepro_routes');
 var getOrderrouter=require('./routes/user/getOrder');
 var orderdetailsrouter=require('./routes/user/order_details_routes');
 var currentOrderrouter=require('./routes/user/current_order_routes');
 var pastOrderrouter=require('./routes/user/past_order_routes');
 var feedbackrouter=require('./routes/user/feedback_routes');
 var orderbyidrouter=require('./routes/user/orderbyid_routes');
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
app.use('/userlogin',userloginrouter);
app.use('/signup',signuprouter);
app.use('/deliveryviewmore',Deliveryassignrouter);
app.use('/notassign',notassignrouter);
app.use('/emailuser',emailrouter);
app.use('/prod',prodrouter);
app.use('/cart',cartrouter);
app.use('/search',searchrouter);
app.use('/deletecart',deletecartrouter);
app.use('/updateproduct',updateprorouter);
app.use('/getorder',getOrderrouter);
app.use('/orderdetails',orderdetailsrouter);
app.use('/currentorder',currentOrderrouter);
app.use('/pastorder',pastOrderrouter);
app.use('/feedback',feedbackrouter);
app.use('/orderbyid',orderbyidrouter);
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
