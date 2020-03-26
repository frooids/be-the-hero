const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

/**
 * Rotas -> /exemplo/teste
 * 
 * Metodos Http:
 * Get
 * Post
 * Put
 * Delete....ja sei
 * 
 * Tipos de parametros
 * Query params: nomeados enviados na rota após '?' -> (filtros e paginação)
 * Route Params: parametros utilizados para identificar recursos exe: -> 3333/users/1 usa o request.params para recuperar
 * Request body: parametros exe: -> 3333/users?name=João para pegar usa request.query utilizado para criar recursos ou editar;
 *
 * 
 * SQL: Mysql, sqlite, postgreSQL, Oracle, Microsoft SQL Server;
 * NoSql: MongoDB, CouchDB, etc...
 * 
 * 
 */

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;