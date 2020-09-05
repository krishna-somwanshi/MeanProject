const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
  host: "localhost",
  user: "root",
  password: "",
  database: "dac",
};

let addUser = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql =
    "INSERT INTO user (USERNAME, PASSWORD, EMAIL, MOBILE) VALUES (?, ?, ?, ?)";
  await connection.queryAsync(sql, [
    input.username,
    input.password,
    input.email,
    input.mobile,
  ]);

  await connection.endAsync();
};

let authenticateUser = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql = "SELECT * FROM USER WHERE USERNAME=? AND PASSWORD=?";
  const results = await connection.queryAsync(sql, [
    input.username,
    input.password,
  ]);

  await connection.endAsync();

  if (results.length === 0) {
    throw new Error("Invalid Credentials");
  }
};

let updateUser = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql = "UPDATE user set Password=? where username=?"
  await connection.queryAsync(sql, [
    input.Password,
    input.username
  ]);

  await connection.endAsync();
}

module.exports = { addUser, authenticateUser, updateUser };
