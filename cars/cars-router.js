const express = require('express');
const knex = require('knex');
const db = require('../data/dbconfig.js');

// const db = knex({
//   client: 'sqlite3',
//   connection: {
//     filename: './data/cars.db3'
//   },
//   useNullAsDefault: true
// });

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.json(cars)
        })
        .catch(err => {
            res.status(500).json({ message: 'failed to retrieve'})
        })
})

router.post('/', (req, res) => {
    //add a post
    //insert into posts () values ()
    db('cars').insert(req.body, 'id') //will generate a warning in console when using sqlite, ignore that
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "failed to add the post" });
        })
});

  module.exports = router;

