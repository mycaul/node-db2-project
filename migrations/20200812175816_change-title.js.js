exports.up = function(knex) {
    return knex.schema.table('cars', tbl => {
        tbl.dropUnique('Title')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.table('cars', tbl => {
      tbl.string('Title').unique();
    })
  };