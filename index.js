var Hapi = require('hapi');
// Declare internals

var internals = {};


var handler = function (request) {

    request.reply.view('index', {
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
    server.route({ method: 'GET', path: '/', handler: handler });
    server.route({ method: 'GET', path: '/ping', handler: function() { this.reply('Hello'); } });
    server.start();
};


internals.main();