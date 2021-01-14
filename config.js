module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || '5000',
  API_KEY: process.env.API_KEY || 'my-secret-key',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://patience@localhost/choreapp'
}