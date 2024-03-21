import { db, sql } from "../connect/mssql";

export const createAnUser = async (userInfo: Record<any, any>) => {
  const pool = await db();
  const requestInstance = await pool.request();
  const result = await requestInstance
    .input("email", sql.VarChar(55), userInfo.email)
    .input("user_name", sql.VarChar(55), userInfo.user_name)
    .input("password", sql.VarChar(55), userInfo.password)
    .input("first_name", sql.VarChar(55), userInfo.first_name)
    .input("last_name", sql.VarChar(55), userInfo.last_name)
    .input("department", sql.VarChar(55), userInfo.department)
    .input("user_type", sql.VarChar(55), userInfo.user_role)
    .input("Status", sql.VarChar(55), userInfo.Status);
  const res = await result.query(
    `INSERT INTO UserManagement(EmailAddress,UserName,EncryptedPassword,FirstName,LastName,Dept,UserType,Status) values(@email,@user_name,@password,@first_name,@last_name,@department,@user_type,@Status)`
  );
  return res;
};

export const getAllUsers = async () => {
  const pool = await db();
  const requestInstance = pool.request();
  const result = requestInstance.query(`SELECT * FROM UserManagement`);
  return result;
}; 