// index.js
const express = require('express');
const db = require('./dbconn');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());


app.use(express.json());

// Endpoint to fetch all users
app.get('/users', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM player_scores');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.use(express.json());


// Endpoint to save player score
app.post('/api/score', (req, res) => {
  const { playerName, score } = req.body;
  const query = 'INSERT INTO player_scores (player_name, score) VALUES (?, ?)';

  db.query(query, [playerName, score], (err, results) => {
    if (err) {
      res.status(500).send('Error saving score');
      return;
    }
    res.status(200).send('Score saved successfully');
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
