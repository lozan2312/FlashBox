const mysql = require('mysql');
const util = require('util');
const config = require('./config/config.json');

connection = mysql.createConnection({
  host: config.DB_USER_CREDENTIALS.HOST,
  user: config.DB_USER_CREDENTIALS.USERNAME,
  password: config.DB_USER_CREDENTIALS.PASSWORD,
  database: config.DB_USER_CREDENTIALS.DATABASE
});

connection.connect(function(err) {
  if (err) {throw err};
  console.log("Connected!");
});

const DBquery = util.promisify(connection.query).bind(connection);

module.exports = {DBquery};
