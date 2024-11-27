const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const db = require('./dbconn'); // Database connection file
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Endpoint to fetch all users (excluding password)
app.get('/api/users', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT id, username FROM users'); // Exclude password
    res.json(rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users from database' });
  }
});

// Endpoint to add a new user with hashed password
app.post('/api/users', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    const result = await db.query(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, hashedPassword]
    );
    res.status(201).json({ message: 'User added successfully', userId: result[0].insertId });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ message: 'Error adding user to the database' });
  }
});

// Endpoint to update user details (username or password)
app.put('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    // Hash the new password before updating
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await db.query(
      'UPDATE users SET username = ?, password = ? WHERE id = ?',
      [username, hashedPassword, id]
    );

    if (result[0].affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Error updating user in the database' });
  }
});

// Endpoint to delete a user
app.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query('DELETE FROM users WHERE id = ?', [id]);

    if (result[0].affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Error deleting user from the database' });
  }
});

// Endpoint to login a user and validate the password
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    // Fetch the user by username
    const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = rows[0];
    console.log('*********************************************************')
    console.log('password', password);
    console.log('user.password', user.password);
    
    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Is Match:', isMatch);
    console.log('*********************************************************')
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.json({ message: 'Login successful', userId: user.id, username: user.username });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Error logging in' });
  }
});


const password = 'qwer1234';

(async () => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('password', password);
    console.log('Hashed Password:', hashedPassword);
    // Comparing passwords (bcrypt.compare returns a Promise)
    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log('Is Match:', isMatch);  // This will log either true or false
  } catch (err) {
    console.error('Error:', err);
  }
})();



// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
