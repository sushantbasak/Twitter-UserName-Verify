const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.listen(port, () => console.log('Server started at port ' + port));
