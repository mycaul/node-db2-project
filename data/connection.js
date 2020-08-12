const knex = require('knex');

const knexFile = require('../knexfile');

const config = knexFile.development;

console.log({config});

module.exports = knex(config);