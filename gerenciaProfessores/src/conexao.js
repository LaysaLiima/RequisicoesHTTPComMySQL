const knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      database: 'gerencia_professores'
    },
  });

  module.exports = knex;