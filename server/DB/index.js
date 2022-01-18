import pg from "pg";

const pool = new pg.Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  password: process.env.PASSWORD,
  ssl: { rejectUnauthorized: false },
});

function query(text, params) {
  return pool.query(text, params);
}

export default query;
