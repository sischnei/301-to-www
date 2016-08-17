require('http').createServer(function (request, response) {
  response.writeHead(301, {"Location": "http://" + request.headers.host.replace("www.", "") + request.url});
  response.end();
}).listen(80);
