

var http = require("http");
http.createServer(function (request, response) {
   
   
   response.end('NAME: SUJAY KUMAR DAS\n ADDRESS: 241, MANAVATA NAGAR\nCOLLEGE :SGSITS ');
}).listen(81);

console.log("Server port is 81");

