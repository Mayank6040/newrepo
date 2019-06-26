var express = require('express');
var app = express();



var userController=function (req, res) {
  console.log("CAlling rest api");
  var users=[
            {firstName:'Mayank',lastName:'Sharma',age:22},
            {firstName:'Vishal',lastName:'Babra',age:23},
            {firstName:'Abhishek',lastName:'Saini',age:22},
            
      ];
  res.send(users);
};



app.get('/users',userController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("listening at http://localhost:8088", host, port)
})