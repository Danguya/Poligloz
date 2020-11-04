const { Router } = require('express');
const index = require('../controllers/index');

const routes = Router();

routes.get('/', index.home);
routes.get('/translate/:fromLanguage/:toLanguage/:content', index.translate);

module.exports = routes;
