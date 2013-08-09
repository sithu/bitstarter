var Hapi = require('hapi');
var log = require('./logger');
var recipes = require('./data');
var Datastore = require('./datastore');
var ds = new Datastore();

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
    request.reply.view('search', ds.content);
};

var recipeHandler = function (request) {
    log.info('::recipe:' + request.params.id);
    var id = parseInt(request.params.id);
    var recipe = getRecipe(id);
    ds.viewed(id);
    recipe['liked_url'] = "/recipe/" + id + "/liked";
    recipe.views = ds.content.recipes[id - 1].views;
    request.reply.view('recipe', recipe);
};

var likedHandler = function (request) {
    log.info('::liked:' + request.params.id);
    ds.liked(parseInt(request.params.id));
    request.reply().code(200);
};

var newRecipeHandler = function (request) {
    log.info('::create-new-recipe:');
    request.reply().code(200);
};

var addToRecipeBoxHandler = function (request) {
    log.info('::add-to-my-recipe-box:');
    request.reply().code(200);
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
    // routing config - View Handlers
    server.route({ method: 'GET', path: '/', handler: indexHandler });
	server.route({ method: 'POST', path: '/search', config: searchConfig });
	server.route({ method: 'GET', path: '/recipe/{id}', handler: recipeHandler });
    // API Handlers
    server.route({ method: 'GET', path: '/new-recipe', handler: newRecipeHandler });
    server.route({ method: 'GET', path: '/add-to-my-recipe-box', handler: addToRecipeBoxHandler });
    server.route({ method: 'GET', path: '/recipe/{id}/liked', handler: likedHandler });

    server.route({ method: 'GET', path: '/ping', handler: function() { this.reply('Hello'); } });
    
    server.start();
};

var util = require('util');   

/* server started */  
util.puts('> Node.JS is running on port 8080');

internals.main();