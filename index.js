var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World\n');
  console.log('VISITOR ACCESSED 3000\n');
  
  
var request = require('request');

request({
  method: 'GET',
  url: 'https://private-anon-be4af3103-shipstation.apiary-proxy.com/orders?orderStatus=awaiting_shipment',
  headers: {
    'Authorization': 'Basic YTUwZmM2NTc3ODlmNGE1MzhiOTE2OTgyNTkxYjMxYTk6ODIwZTg5NDdhNTJkNDYzOTlhM2YwNzg2ODcxZWIwZjU='
  }}, function (error, response, body) {

  if(response.statusCode == 200)
  res.end(body);
});
  
  
}).listen(3000, '0.0.0.0');
console.log('Server running at http://0.0.0.0:3000/');

