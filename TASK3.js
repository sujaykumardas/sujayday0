

var http = require("http");
http.createServer(function (request, response) {
   
   response.writeHead(200, {'Content-Type': 'text'});
   response.end('NAME: SUJAY KUMAR DAS\n ADDRESS: 241, MANAVATA NAGAR\nCOLLEGE :SGSITS ');
}).listen(81);

console.log("Server port is 81");

