var Hapi = require('hapi');
// Declare internals

var internals = {};


var indexHandler = function (request) {

    request.reply.view('index', {
        title: 'OneStop'
    });
};

var searchHandler = function (request) {

    request.reply.view('search', {
        title: 'OneStop'
    });
};

var recipeHandler = function (request) {

    request.reply.view('recipe', {
        title: 'OneStop'
    });
};

internals.main = function () {

    var options = {
        views: {
            engines: { html: 'handlebars' },
            path: __dirname + '/templates'
        }
    };

    var server = new Hapi.Server(8080, options);
    server.route({ 
    	method: 'GET', 
    	path: '/{path*}', 
    	handler: {
    		directory: { path: './static', listing: false, index: true }
    	}
	});
    // routing config here
    server.route({ method: 'GET', path: '/', handler: indexHandler });
	server.route({ method: 'POST', path: '/search', handler: searchHandler });
	server.route({ method: 'GET', path: '/recipe', handler: recipeHandler });
    server.route({ method: 'GET', path: '/ping', handler: function() { this.reply('Hello'); } });
    
    server.start();
};

var util = require('util');   

/* server started */  
util.puts('> Node.JS is running on port 8080');

internals.main();