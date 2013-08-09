// Load modules

var Hapi = require('hapi');


// Declare internals

var internals = {};


// Type shortcuts

var S = Hapi.types.String;
var N = Hapi.types.Number;
var A = Hapi.types.Array;


internals.get = function () {

    this.reply('Success!\n');
};


internals.payload = function () {

    this.reply('Success!\n');
};


internals.main = function () {

    var server = new Hapi.Server(8000);

    server.route([
        { method: 'GET', path: '/', config: { handler: internals.get, validate: { query: { username: S() } } } },
        { method: 'GET', path: '/admin', config: { handler: internals.get, validate: { query: { username: S().required().with('password'), password: S() } } } },
        { method: 'GET', path: '/users', config: { handler: internals.get, validate: { query: { email: S().email().required().min(18) } } } },
        { method: 'GET', path: '/config', config: { handler: internals.get, validate: { query: { choices: A().required() } } } },
        { method: 'GET', path: '/test', config: { handler: internals.get, validate: { query: { num: N().min(0) } } } },
        { method: 'GET', path: '/test2', config: { handler: internals.get, validate: { query: { p1: S().required().rename('itemId') } } } },
        { method: 'GET', path: '/simple', config: { handler: internals.get, validate: { query: { input: S().min(3) } } } }
    ]);

    var schema = {
        title: S()
    };

    server.route({ method: 'POST', path: '/users/{id}', config: { handler: internals.payload, validate: { query: {}, payload: schema } } });

    server.start();
};


internals.main();
