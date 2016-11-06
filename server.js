var express = require('express');
var app = express();

//set port
app.set('port', (process.env.PORT || 8080));

//handle get
app.get('/', function(req, res) {
    console.log(req.headers);
    var idObj = {
        ipaddress: req.headers['x-forwarded-for'],
        language: req.headers['accept-language'].split(',')[0],
        software: req.headers['user-agent'].match(/\(([\w\s_.:;]+)\)/)[1]
    };
    
    res.send(JSON.stringify(idObj));
});

app.listen(app.get('port'));
