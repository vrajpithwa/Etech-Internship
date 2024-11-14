const express = require('express');
const db = require('./dbconn');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const validateScoreInput = (req, res, next) => {
  const { player_name, score } = req.body;
  
  if (!player_name || player_name.trim() === '') {
    return res.status(400).json({ message: 'Player name is required' });
  }
  
  if (score === undefined || score < 0) {
    return res.status(400).json({ message: 'Valid score is required' });
  }
  
  next();
};

// Endpoint to fetch all scores
app.get('/api/score', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM player_scores ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching scores:', error);
    res.status(500).json({ message: 'Error fetching scores from database' });
  }
});

// Endpoint to save a new score
app.post('/api/score', validateScoreInput, async (req, res) => {
  const { player_name, score } = req.body;

  try {
    const query = 'INSERT INTO player_scores (player_name, score) VALUES (?, ?)';
    const [result] = await db.query(query, [player_name, score]);
    
    // Fetch and return the newly created record
    const [newScore] = await db.query(
      'SELECT * FROM player_scores WHERE id = ?',
      [result.insertId]
    );
    
    res.status(201).json(newScore[0]);
  } catch (error) {
    console.error('Error saving score:', error);
    res.status(500).json({ message: 'Error saving score to database' });
  }
});

// Endpoint to update a score
app.put('/api/score/:id', validateScoreInput, async (req, res) => {
  const { id } = req.params;
  const { player_name, score } = req.body;

  try {
    // First check if the record exists
    const [existing] = await db.query(
      'SELECT * FROM player_scores WHERE id = ?',
      [id]
    );

    if (existing.length === 0) {
      return res.status(404).json({ message: 'Score not found' });
    }

    // Update the record
    await db.query(
      'UPDATE player_scores SET player_name = ?, score = ? WHERE id = ?',
      [player_name, score, id]
    );

    // Fetch and return the updated record
    const [updated] = await db.query(
      'SELECT * FROM player_scores WHERE id = ?',
      [id]
    );
    
    res.json(updated[0]);
  } catch (error) {
    console.error('Error updating score:', error);
    res.status(500).json({ message: 'Error updating score in database' });
  }
});

// Endpoint to delete a score
app.delete('/api/score/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [existing] = await db.query(
      'SELECT * FROM player_scores WHERE id = ?',
      [id]
    );
    if (existing.length === 0) {
      return res.status(404).json({ message: 'Score not found' });
    }
    await db.query('DELETE FROM player_scores WHERE id = ?', [id]);
    res.json({ message: 'Score deleted successfully' });
  } catch (error) {
    console.error('Error deleting score:', error);
    res.status(500).json({ message: 'Error deleting score from database' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});