const path = require('path');
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

process.env.PWD = process.cwd();

app.use(express.static(process.env.PWD + '/dist'));

app.get('*', function (req, res) {
  const index = path.join(process.env.PWD, '/dist/index.html');
  res.sendFile(index);
});

app.listen(port);
console.log('server_started');