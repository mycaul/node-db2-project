// Update with your config settings.

module.exports = {
    //config for environment
       development: {
         client: 'sqlite3',
         connection: {
           filename: './data/car-dealer.db3',
         },
         useNullAsDefault: true,
         migrations: {
           directory: './data/migrations',
         },
          seeds: {
           directory: './data/seeds',
         }
       },
     //no testing envrion yet
   
     //config for prod environ
       production: {
         client: 'postgresql',
         connection: {
           database: 'my_db',
           user:     'username',
           password: 'password'
         },
         pool: {
           min: 2,
           max: 10
         },
         migrations: {
           tableName: 'knex_migrations'
         }
       }
     
     };