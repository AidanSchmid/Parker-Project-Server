const mysql = require("mysql");

const db = mysql.createPool({
  connectionLimit: 10,
  user: "u890945999_dev",
  host: "194.195.84.204",
  password: "Parker1!",
  database: "u890945999_ParkerDB",
});

module.exports = db;
