const db = require('../db');

exports.getUsers = async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM users');
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
