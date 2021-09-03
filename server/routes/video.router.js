const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.post('/', (req, res) => {   //MW****
    console.log(req.body);
    // RETURNING "id" will give us back the id of the created video
    const insertVideoQuery = `
    INSERT INTO "solo" ("key")
    VALUES ($1)
    RETURNING "id";`
    // Makes Video
    pool.query(insertVideoQuery, [req.body.key])
    .then(result => {
      console.log('New Video Id:', result.rows[0].id); //ID IS HERE!
    }).catch(err => {
      console.log(err);
      res.sendStatus(500)
    })
  })

  router.get('/:id', (req, res) => {
    console.log('video Details GET');
  
    const query = `SELECT "key" FROM "solo";`;
    const sqlParams=[req.params.id]
  
    pool.query(query,sqlParams)
      .then( result => {
        console.log('video Details GET', result.rows);
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all videos', err);
        res.sendStatus(500)
      })
  
  });




  //GET AND POST
// CREATE ROUTES -
//SAVE THE FILENAME THE KEY IN THE DB CREATE AN API, THAT CAN SAVE TO DATABASE



module.exports = router;