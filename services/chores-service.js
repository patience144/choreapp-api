function getChores(db) {
  return db.from('chores')
  .select('*')
};

function createChore(db, values) {
  return db.into('chores')
  .insert(values)
  .returning('*')
};

function getChore(db) {
  return db.from('chores')
  .select('*')
  .where({ chore_id })
  .first()
};

function editChore(db, chore_id, values) {
  return db.from('chores')
  .select('*')
  .update({ name })
  .where({ chore_id })
  .returning('*')
};

function deleteChore(chore_id) {
  return db.from('chores')
  .where('chore_id', chore_id)
  .del()
};

module.exports = {
  getChores
}