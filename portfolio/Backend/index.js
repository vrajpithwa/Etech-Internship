const express = require('express');
const db = require('./dbconn');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Endpoint to fetch all scores
app.get('/api/score', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM player_scores ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching scores:', error);
    res.status(500).send('Server error');
  }
});

// Endpoint to save a score
app.post('/api/score_save', async (req, res) => {
  const { player_name, score } = req.body;
  
  if (!player_name || score === undefined) {
    return res.status(400).send('Player name and score are required');
  }

  try {
    const query = 'INSERT INTO player_scores (player_name, score) VALUES (?, ?)';
    await db.query(query, [player_name, score]);
    res.status(200).send('Score saved successfully');
  } catch (error) {
    console.error('Error saving score:', error);
    res.status(500).send('Error saving score');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});