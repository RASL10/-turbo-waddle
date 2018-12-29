const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const users = require('./routes/api/users');
// const profile = require('./routes/api/profile');
// const posts = require('./routes/api/posts');

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

app.use('/api/people/add', users);

app.get('/', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

// app.use('/api/profile', profile);
// app.use('/api/posts', posts);


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



app.listen(port, () => console.log(`Listening on port ${port}`));