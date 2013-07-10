var  express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var buffer = fs.readFileSync('./index.html');

app.get('/', function(request, response) {
  response.send("Connected");
});

http.createServer(function(request, response){
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(buffer);
    response.end();
}).listen(8000);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
