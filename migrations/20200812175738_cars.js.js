exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.integer('VIN').notNullable().unique();
        tbl.string('Make').notNullable();
        tbl.string('Model').notNullable();
        tbl.integer('Milage').notNullable();
        tbl.string('Title').unique();
        tbl.string('Transmission Type');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
  };