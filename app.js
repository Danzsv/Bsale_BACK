require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnectMySql } = require("./config/mysql");
const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

const port = process.env.port || 3001;

// app.use("/api");

app.listen(port, () => console.log(`App Ready in port: ${port}`));

dbConnectMySql();
// const mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
//   database: "bsale_test",
//   user: "bsale_test",
//   password: "bsale_test",
// });

// connection.connect(function (error) {
//   if (error) {
//     throw error;
//   } else {
//     console.log("CONEXION EXITOSA");
//   }
// });
// connection.end();
