exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('cars').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('cars').insert(generateData());
      });
  };
  
  
  let generateData = () => {
    return [
      {
        VIN: 1564653468465163541,
        Make: 'Toyota',
        Model: 'Tundra',
        Milage: 58462,
        Title: 'clean',
      },
      {
        VIN: 1564653478946186,
        Make: 'Dodge',
        Model: 'Durango',
        Milage: 58462,
        Title: 'clean',
      },
      {
        VIN: 1564465163541,
        Make: 'Mercedes',
        Model: 'Benz',
        Milage: 584,
        Title: 'clean',
      },
      {
        VIN: 15646539545583541,
        Make: 'Audi',
        Model: 'Z52',
        Milage: 546,
        Title: 'salvage',
      },
    ]
  }