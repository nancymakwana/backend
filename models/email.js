var email = require("emailjs/email");
var demo = {

   sendMail: function (demo, callback) {

      var server = email.server.connect({
         user: 'shahrose271@gmail.com',
         password: 'nancyishva123',
         host: "smtp.gmail.com",
         ssl: true,
         port: 465
      });


      server.send({
         text: demo.msg,
         from: 'shahrose271@gmail.com',
         to: demo.user_email,
         subject: demo.subject
      }, callback);
   }


}
module.exports = demo;
