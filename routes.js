const express       = require('express');
const routes        = express.Router();
const tradutor      = require('./tradutor-api');
const GrammarController = require('./src/controllers/GrammarController')
const { route } = require('c:/projects/auth jwt - nodejs/routes/auth');


routes.post('/store', GrammarController.store);
routes.get('/index', GrammarController.index);

routes.get('/',(request, response)=>{
    response.send({
        'message':'2 '+tradutor.toTranslate('EN','pt','This is Angola')
    });    
});

routes.get('/translate/:data',(request, response)=>{
    response.send({
        'message':'/translate/:data'
    });
});

module.exports = routes;