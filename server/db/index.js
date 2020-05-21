var mysql = require('mysql');

var db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

db.connect(err => {
  if (err) {
    console.log(err);
    return;
  }
});

module.exports = db;
