require('dotenv').config();

const options = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  logging: true,
  database: process.env.MYSQL_DB_NAME || 'estoque-TXAI',
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || '3306',
  dialect: "mysql"
}

module.exports = {
  "development": {
    ...options,
  },
  "test": {
    ...options,
  },
  "production": {
    ...options,
  },
};
