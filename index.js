var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 1337;

fs.readFile('./html/index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    server = http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(port);
  });


console.log("Server running at http://localhost:%d", port);
