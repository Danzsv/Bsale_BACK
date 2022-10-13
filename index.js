const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
  database: "bsale_test",
  user: "bsale_test",
  password: "bsale_test",
});

connection.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("CONEXION EXITOSA");
  }
});
connection.end();
