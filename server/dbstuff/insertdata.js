const { pool } = require("./db");

async function insertData() {
  const [name, color] = process.argv.slice(2);
  try {
    const res = await pool.query(
      "INSERT INTO users (name, color) VALUES ($1, $2)",
      [name, color]
    );
    console.log(`Added a member with the name ${name}`);
  } catch (e) {
    console.log(e);
  }
}

insertData();
