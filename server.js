var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

//adding middleware
var middleware = require('./middleware.js');

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