// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "birdman1",
//   database: "burger_db",
// });
var connection = mysql.createConnection({
  host: "w1h4cr5sb73o944p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "i2d0e1jgphlfspsg",
  password: "ewf8mwsbor2paw4f",
  database: "rfk710r8e7o528b8",
});

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
