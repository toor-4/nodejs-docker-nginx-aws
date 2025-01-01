const express = require('express');
const path = require('path');

const app = express();

const appName = process.env.APP_NAME;

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  console.log(`Request received by ${appName}`);
});

app.listen(port, () => {
  console.log(`${appName} is listening on  http://localhost:${port}`);
});
