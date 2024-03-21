import pkg from "mssql";
 
const { connect } = pkg;
const configg: string | pkg.config = {
  server: "localhost",
  database: "master",
  user: "sa",
  password: "2002",
  port: 1433,
  options: {
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true,
  },
};
let pool: pkg.ConnectionPool | null = null;

 export const db = async () => {
   return await connect(configg);
};
export { pkg as sql}  
