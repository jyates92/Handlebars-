var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "w1h4cr5sb73o944p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "i2d0e1jgphlfspsg",
  password: "ewf8mwsbor2paw4f",
  database: "rfk710r8e7o528b8",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = `CREATE TABLE burgers
  (
      id int NOT NULL AUTO_INCREMENT,
      burger_name varchar (255) NOT NULL, 
      devoured BOOLEAN DEFAULT false,
      PRIMARY KEY (id)
  )`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
