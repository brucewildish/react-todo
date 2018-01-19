// Express is a web application framework (module) for Node.js
var express = require('express');  	// provides access to express api via object

  // Create our app as an instance of the express class
	var app = express();
	const PORT = process.env.PORT || 3000;

  // this part is for Heroku
	app.use(function (req, res, next) {
		if (req.headers['x-forwarded-proto'] === 'https') {
			res.redirect('http://' + req.hostname + req.url);
		} else {
			next();
		}
	});

  app.use(express.static('public'));  	// use folder "public"

  // start server takes port and function to call once server is up
  app.listen (PORT, function() {
		console.log('Express server is up on port ' + PORT);
});

// // Express is a web application framework for Node.js
// var express = require('express');  	// provides access to express api via object
//
//   // Create our app
// 	var app = express();			// call express library as a function
//
//   app.use(express.static('public'));  	// use folder "public"
//
//   // start server takes port and function to call once server is up
//   app.listen (3000, function() {
// 		console.log('Express server is up on port 3000')
// });
