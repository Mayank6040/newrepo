var express = require('express');
var app = express();

//Reusable controllers
var productController=function(req, res){
  console.log("Invoking  rest api for product list");
  var products = [
    {id:1, title:"motoG4",description:"mobile",quantity:500, unitprice:12000},
	{id:2, title:"iphoneXr",description:"mobile",quantity:500, unitprice:90000},
	{id:3, title:"Huawei p4",description:"mobile",quantity:500, unitprice:60000}
   
  ];
  res.send(products);
};

// setting router to map requests  with controllers
app.get ('/products',productController);
var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("listening at http://localhost:8086", host, port)
})