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

module.exports = middleware