const express       = require('express');
const routes        = express.Router();
const tradutor      = require('./tradutor-api');

routes.get('/',(request, response)=>{
    response.send({
        'message':'poligloz'
    });    
});

routes.get('/translate/:data',(request, response)=>{
    response.send({
        'message':'/translate/:data'
    });
});

module.exports = routes;