const { Pool } = require('pg');
const config = require('../../config');
const pool = new Pool(config.db);

async function query(q, params) {
  const { rows } = await pool.query(q, params);
  return rows;
}

module.exports = {
  query,
};
