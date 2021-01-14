const app = require('./index');
const knex = require('knex');
const { DATABASE_URL } = require('./config');

const knexInstance = knex({
  client: 'pg',
  connection: DATABASE_URL
});

app.set('db', knexInstance);

app.listen(5000, () => {
  console.log('Server is listening on port 5000')
});