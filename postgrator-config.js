const { DATABASE_URL } = require('./config');

module.exports = {
  'migrationsDirectory': 'migrations',
  'driver': 'pg',
  'connectionString': DATABASE_URL
};