const express = require('express');
const router = express.Router()
const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rasl100%"
})

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
})

router.post('/', (req, res, next) => {
    const {name, age} = req.body
  
    if(!name || !age) {
      return res.sendStatus(400);
    }
  
    const sql = 'INSERT INTO turbo.people SET ?'
    const values = {name: name, age: age};
    con.query(sql, values, function(error, result){
      if(error) {
        console.log('Help')
        next(error);
      } else {
          console.log('User added to database with ID: ' + result.insertId)
            res.send('User added to database with ID: ' + result.insertId);
          }
      })
  })

module.exports = router;
