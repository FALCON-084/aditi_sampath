
//

var builder = require('botbuilder');
var restify = require('restify');
var analyticsService = require('./models/text-analytics');

// Setup Restify Server
var server = restify.createServer();
server.listen(3978, function() {
    console.log('%s listening to %s', server.name, server.url);
});

// Create bot
var connector = new builder.ChatConnector({
    appId: '95a0a3f3-0616-4339-b161-1555e6784b4c',
    appPassword: '3rqVr45QvS1ONmvGi5YV1Mp'
});
server.get('/', function(req, res, next) {
    res.send('hello ');
});

//luis model url

const LuisModelUrl = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/00075350-0d1e-4f2d-8f6e-75e253066b43?subscription-key=468963da9804413788459981febe3bb6&timezoneOffset=0&verbose=true&q= ';

server.post('/api/messages', connector.listen());
