// Create a web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Data
let comments = [
  { id: 1, author: 'John Doe', text: 'Hello world' },
  { id: 2, author: 'Jane Doe', text: 'Hi everyone' },
  { id: 3, author: 'Alice', text: 'Nice to meet you' }
];

// Routes
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find(c => c.id === id);
  res.json(comment);
});

app.put('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const newComment = req.body;
  comments = comments.map(c => c.id === id ? newComment : c);
  res.json(newComment);
});

app.delete('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  comments = comments.filter(c => c.id !== id);
  res.json({ id });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});