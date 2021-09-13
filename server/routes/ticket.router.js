const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const pool = require("../modules/pool");
const router = express.Router();

// Post Request

router.post("/", rejectUnauthenticated, (req, res) => {
  //MW****
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created video
  const insertTicketQuery = `
    INSERT INTO "question_table" ("question","department","priority")
    VALUES ($1, $2, $3);`;
  // RETURNING "id";`
  // Makes Video
  pool
    .query(insertTicketQuery, [
      req.body.question,
      req.body.department,
      req.body.priority,
    ])
    .then((res) => {
      //ID IS HERE! // NEED TO REVISIT RES.send STATUS
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

//GET REQUEST FROM DB

router.get("/", rejectUnauthenticated, (req, res) => {
  console.log("Ticket Info GET");

  const sqlQuery = `SELECT "id","question","department","priority" FROM "question_table";`;

  // console.log('Log for sql Params', sqlParams);

  pool
    .query(sqlQuery)
    .then((result) => {
      console.log("Ticket Details GET", result.rows);
      res.send(result.rows);
      console.log("Ticket Details GET");
    })
    .catch((err) => {
      console.log("ERROR: Get all Tickets", err);
      res.sendStatus(500);
    });
});

router.get("/:id", (req, res) => {
  console.log("Details GET");
  console.log();

  const query = `SELECT "id","question","department" FROM "question_table" WHERE id=$1;`;
  const sqlParams = [req.params.id];

  pool
    .query(query, sqlParams)
    .then((result) => {
      console.log("TICKET Details GET", result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get individual Ticket", err);
      res.sendStatus(500);
    });
});


router.delete('/:id', rejectUnauthenticated, (req, res) =>{
  console.log('hahah',req.params);
  console.log('hahah',req.params.id);
  console.log('ROUTER DELETE******');
  const id= req.params.id;
  const queryText =`DELETE FROM "question_table" WHERE id = $1 RETURNING *;`;
  pool.query(queryText, [id])
  .then((result) => {
    res.sendStatus(201)
  }).catch((error)=> {
    res.sendStatus(500);
  })

});




module.exports = router;
