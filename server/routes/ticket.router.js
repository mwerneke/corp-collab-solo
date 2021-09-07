const express = require("express");
const { rejectUnauthenticated } = require("../modules/authentication-middleware");
const pool = require("../modules/pool");
const router = express.Router();

// Post Request

router.post('/', rejectUnauthenticated, (req, res) => {   //MW****
    console.log(req.body);
    // RETURNING "id" will give us back the id of the created video
    const insertTicketQuery = `
    INSERT INTO "question_table" ("question","department","priority")
    VALUES ($1, $2, $3);`
    // RETURNING "id";`
    // Makes Video
    pool.query(insertTicketQuery, [req.body.question, req.body.department, req.body.priority])
    .then(res => {
        
      //ID IS HERE! // NEED TO REVISIT RES.send STATUS
      
    }).catch(err => {
      console.log(err);
      res.sendStatus(500)
    })
  })

  //GET REQUEST FROM DB

  router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('Ticket Info GET');
  
    const sqlQuery = `SELECT "question","department","priority" FROM "question_table";`;
    
    // console.log('Log for sql Params', sqlParams);
  
    pool.query(sqlQuery)
      .then((result) => {
        console.log('Ticket Details GET',result.rows);
        res.send(result.rows);
        console.log('Ticket Details GET');
        
      })
      .catch((err) => {
        console.log('ERROR: Get all Tickets', err);
        res.sendStatus(500)
      })
  
  });

  module.exports = router;