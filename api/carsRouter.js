const express = require('express');

const db = require('../data/connection')

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
  .then(car => {
    res.json(car); 
  })
  .catch (error => {
      console.log('GET / error:', error)
    res.status(500).json({ message: 'Failed to retrieve cars' });
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  db('cars').where({ id }).first()
  .then(car => {
    res.json(car);
  }) 
  .catch (error => {
      console.log(`GET /id error:`, error)
    res.status(500).json({ message: 'Failed to retrieve car' });
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  db('cars').insert(body)
  .then(ids => {
    db('cars').where({ id: ids[0] })
    .then(newCar => {
      res.status(201).json(newCar);
    });
  })
  .catch (error => {
    console.log('POST / error:', errpr);
    res.status(500).json({ message: "Failed to store data" });
  });
});

module.exports = router;