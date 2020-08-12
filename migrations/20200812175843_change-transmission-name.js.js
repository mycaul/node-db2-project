exports.up = function(knex) {
    return knex.schema.table('cars', tbl => {
      tbl.renameColumn('Transmission Type', 'Transmission');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.table('cars', tbl => {
      tbl.renameColumn('Transmission', 'Transmission Type');
    })
  };