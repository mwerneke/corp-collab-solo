const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get('/', (req, res) => {
    console.log('videoSearch results GET');
  
    const query = `SELECT "key", "question", "department" FROM "solo";`;
    // const sqlParams=[req.params.id]
  
    pool.query(query)
      .then( result => {
        console.log('videoSearch  GET', result.rows);
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get search video search results', err);
        res.sendStatus(500)
      })
  
  });











module.exports = router;