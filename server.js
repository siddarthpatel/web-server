var express = require('express');
var app = express();
var port = 3000;

//adding middleware
var middleware = {
	requiredAuthentication: function(req, res, next){
		console.log('private route hit!');
		next(); //implies that proceed with the route to be served after authentication
	},
	logger: function(req, res, next){
		var date = new Date().toString();
		console.log('Request: ' + req.method + ' ' + req.originalUrl + ' ' + 'on ' + date);
		next();
	}
};

//adding an application level middleware: called everytime a new route is accessed
//app.use(middleware.requiredAuthentication);

app.use(middleware.logger);

//serving a single page/ adding a route level middleware: called everytime the route is visited
app.get('/about', middleware.requiredAuthentication,function(req, res){
	res.send('About Us');
});

//serving up a statio/default page in a directory
app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
	console.log('express server started on port ' + port);
});