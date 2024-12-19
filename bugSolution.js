const express = require('express');
const app = express();
// Middleware to parse JSON request bodies
app.use(express.json());
app.post('/user', (req, res) => {
  console.log(req.body); // req.body will now contain the JSON data
  res.send('User registered');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});