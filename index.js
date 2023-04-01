const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Docker Docker 4 times times');
});

app.listen(3000, () => console.log('Server is up and running on port 3000'));
