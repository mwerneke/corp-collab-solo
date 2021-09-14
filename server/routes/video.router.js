const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

router.post("/", (req, res) => {
  //MW****
  console.log(req.body, "POST LOG ");
  // RETURNING "id" will give us back the id of the created video
  const insertVideoQuery = `
    INSERT INTO "solo" ("key", "question", "department")
    VALUES ($1, $2, $3);`;
  // RETURNING "id";`
  // Makes Video
  pool
    .query(insertVideoQuery, [
      req.body.key,
      req.body.question,
      req.body.department,
    ])
    .then((result) => {
      // console.log('New Video Id:', result.rows[0].id); //ID IS HERE!
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.get("/", (req, res) => {
  console.log("video Details GET");

  const query = `SELECT "key", "question", "department" FROM "solo";`;
  // const sqlParams=[req.params.id]

  pool
    .query(query)
    .then((result) => {
      console.log("video Details GET", result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all videos", err);
      res.sendStatus(500);
    });
});

router.delete('/:id', rejectUnauthenticated, (req, res) =>{
  console.log('hahah',req.params);
  console.log('hahah',req.params.id);
  console.log('ROUTER DELETE******');
  const id= req.params.id;
  const queryText =`DELETE FROM "solo" WHERE key = $1 RETURNING *;`;
  pool.query(queryText, [id])
  .then((result) => {
    res.sendStatus(201)
  }).catch((error)=> {
    res.sendStatus(500);
  })

});

//GET AND POST
// CREATE ROUTES -
//SAVE THE FILENAME THE KEY IN THE DB CREATE AN API, THAT CAN SAVE TO DATABASE

module.exports = router;
