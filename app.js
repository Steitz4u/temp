const http = require('http');
const fs = require('fs');

const PORT = 8083;

// Create a server object:
const server = http.createServer(function (req, res) {
    // Write a response to the client
    res.write("TEST")
    // End the response 
    res.end()
})
  
// Set up our server so it will listen on the port
server.listen(PORT, function (error) {
    // Checking any error occur while listening on port
    if (error) {
        console.log('Something went wrong', error);
    }
    // Else sent message of listening
    else {
        console.log('Server is listening on port' + PORT);
    }
})

fs.readFile('./index.html',function(error,html){
    if(error) throw error;
    http.createServer(function(request, response){
        response.writeHeader(200,{"Content-Type":"text/html"});
        response.write(html);
        response.end();
    
    }).listen(PORT)
})