var user = require('./routes/user');

app.get('/users', user.list);
var express = require('express'); // framework
var routes = require('./routes'); // where routes will be defined
var http = require('http'); // protocol 
var path = require('path'); // node module to resolve paths
app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', routes.index);

var routes = require('./routes');
app.get('/', routes.index);

var TwitterPackage = require('twitter');
var secret = {
    consumer_key: 'waG1rBUsrvHPvw2RtwQ2vOzmn',
    consumer_secret: '3isjLD5zkOhpWMZM5tyYcwlQFqHjfzn1XQ76ST4A6AAZfC7KVf',
    access_token_key: '756858319382380544-FHIbTN8sLf4UIVs2P80lq6rLDAR1KL7',
    access_token_secret: '0WE5IajcdmS2Va6VZ0Al0gAIsgMlnwON4ImnNvpJvCllT'
}
var Twitter = new TwitterPackage(secret);

function uploadIt(message) {
    Twitter.post('statuses/update', { status: message }, function(error, tweet, response) {
        if (error) {
            console.log(error);
        }
        console.log(tweet); // Tweet body.
        console.log(response); // Raw response object.
    });
}