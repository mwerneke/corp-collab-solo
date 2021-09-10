const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/:inputSearch", (req, res) => {
  console.log("videoSearch results GET");
  console.log(req.params);
  console.log('******');
  
  const query = `SELECT * FROM "solo" WHERE "question" LIKE '%' || $1 || '%';`;
  // const sqlParams=[req.params.id]
//   '%' || $1 || '%'
  pool
    .query(query, [req.params.inputSearch])
    

    .then((result) => {
    
      console.log("videoSearch  GET", result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get search video search results", err);
      res.sendStatus(500);
    });
});

//Need to set up store reducer

module.exports = router;
