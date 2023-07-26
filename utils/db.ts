

const mysql = require("mysql2/promise");

export const pool = mysql.createPool({
  port: "8889",
  host: "localhost",
  user: "root",
  password: "root",
  database: "megak_arena",
  decimalNumbers: true,
  namedPlaceholders: true,
});

