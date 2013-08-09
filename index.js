var Hapi = require('hapi');
var log = require('./logger');
var recipes = require('./data');

// Declare internals

var internals = {};

// Business Logic Functions
function getRecipe(id) {
    return recipes.filter(function(recipe) {
        return recipe.id === id;
    }).pop();
}

// Handlers
var indexHandler = function (request) {
	log.info('::home:' + request.query.name);
    request.reply.view('index', {
        title: 'OneStop'
    });
};

var searchHandler = function (request) {
    log.info('::search:keyword:' + request.payload.search);
    request.reply.view('search', {
        title: 'OneStop'
    });
};

var recipeHandler = function (request) {
    log.info('::recipe:id:' + request.params.id);
    var recipe = getRecipe(parseInt(request.params.id));
    request.reply.view('recipe', recipe);
};

// config
var searchConfig = {
    handler: searchHandler, 
    payload: 'parse',
    validate: { 
        payload: { 
            search: Hapi.types.String().optional()
    } }
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
	server.route({ method: 'POST', path: '/search', config: searchConfig });
	server.route({ method: 'GET', path: '/recipe/{id}', handler: recipeHandler });
    server.route({ method: 'GET', path: '/ping', handler: function() { this.reply('Hello'); } });
    
    server.start();
};

var util = require('util');   

/* server started */  
util.puts('> Node.JS is running on port 8080');

internals.main();