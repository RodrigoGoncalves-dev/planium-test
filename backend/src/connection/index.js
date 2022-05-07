require('dotenv').config();

const mysql = require('mysql2');

const pool = mysql.createPool({
  connectionLimit: 1000,
  user: "planium_user",
  password: "planium_password",
  database: "planium",
  host: "localhost",
  port: 3306,
});

exports.execute = (query, params = []) => {
  return new Promise((resolve, reject) => {
    pool.query(query, params, (error, result, fields) => {
      if (error) {
        reject(error);
      }
      if (resolve) {
        resolve(result);
      }
    });
  })
};