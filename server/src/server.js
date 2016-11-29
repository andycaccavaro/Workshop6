// Imports the express Node module.
var express = require('express'); // Creates an Express server.
var app = express();
// Defines what happens when it receives the `GET /` request
app.get('/', function (req, res) { res.send('Hello World!');
});
// Starts the server on port 3000!
app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});
