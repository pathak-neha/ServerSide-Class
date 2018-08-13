// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT1 = 7000;
var PORT2 = 7500;


// Create a generic function to handle requests and responses
function handleRequestOne(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("Something good");
}

// Create a generic function to handle requests and responses
function handleRequestTwo(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("Something bad");
  }
  

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var serverOne = http.createServer(handleRequestOne);

// Start our server so that it can begin listening to client requests.
serverOne.listen(PORT1, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var serverTwo = http.createServer(handleRequestTwo);

// Start our server so that it can begin listening to client requests.
serverTwo.listen(PORT2, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
