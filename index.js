/**
 * This is the main file of the application. 
 */ 
 
// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

var express = require('express');

// Create a new express.js web app:

var app = express();

// Configure express with the settings found in
// our config.js file

require('./config')(app);


// Add the routes that the app will react to,
// as defined in our routes.js file

require('./routes')(app);

// This file has been called directly with 
// `node index.js`. Start the server!

//app.listen(8080);
//console.log('Your application is running on http://localhost:8080');


// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(process.env.PORT || appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});