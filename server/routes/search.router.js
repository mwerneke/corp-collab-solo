const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get('/', (req, res) => {
    console.log('videoSearch results GET');
  
    const query = `SELECT "question" FROM "solo" WHERE "question" LIKE '%' || $1 || '%';`;
    // const sqlParams=[req.params.id]
  
    pool.query(query, [req.body.searchWord])
    
      .then( result => {
        console.log('videoSearch  GET', result.rows);
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get search video search results', err);
        res.sendStatus(500)
      })
  
  });

  

//Need to set up store reducer



module.exports = router;