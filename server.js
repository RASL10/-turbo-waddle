const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const mysql = require('mysql');
const cors = require('cors')

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rasl100%"
})

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.get('/', (req, res) => {
  res.send({ express: 'Hello From Express' });
});


app.get('/api/people', (req, res, next) => {
  let sql = `SELECT * FROM turbo.people`
  con.query(sql, function(err, people) {
    if(err) {
      console.log('not good')
      res.sendStatus(err)
    } else {
      res.json(people)
    }
})
})

app.post('/api/people/add', (req, res, next) => {
  const {name, age} = req.body
  console.log(name, age)

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

app.listen(port, () => console.log(`Listening on port ${port}`));