var express = require('express');
var app = express();
var port = process.env.PORT || 5501;

app.get('/test', function(req, res) {
    res.json({message: 'Heroku, world!'});
});

app.get('/test/:name', function(req, res) {

    var name = req.params.name;
    
    res.json({message: 'Heroku, ' + name})
});


app.listen(port, function(err) {

});