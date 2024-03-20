import express from "express";
import pkg from "mssql";
import fs from "fs";
const { connect } = pkg;
import mysql from "mysql";
const connection = mysql.createConnection({
  host: "mysql-10a79f0b-snapsi.a.aivencloud.com",
  user: "avnadmin",
  password: "AVNS_jwO9NLVs3LelE3cysEI",
  database: "defaultdb",
   
});
const app = express();
const tempEnv = {
  port: 3000,
};
// const configg: string | pkg.config = {
//   server: "mysql-10a79f0b-snapsi.a.aivencloud.com",
//   database: "defaultdb",
//   user: "avnadmin",
//   password: "AVNS_jwO9NLVs3LelE3cysEI",
//   port: 22648, // MySQL port
//   options: {
//     encrypt: true, // Make sure to set this to false for MySQL
//     enableArithAbort: true,
//   },
// };
async function bootstrap() {
  connection.connect();

  connection.query(
    "SELECT 1 + 1 AS solution",
    function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results[0].solution);
    }
  );

  connection.end();

  //   let pool = await connect(configg);
  //   console.log(pool);
}
bootstrap();
app.listen(tempEnv.port, () => {
  console.log("server is running in port: " + tempEnv.port);
});
