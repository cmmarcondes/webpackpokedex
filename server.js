const path = require('path');
const express = require('express');
const port = process.env.PORT;
const app = express();
process.env.PWD = process.cwd();

app.use(express.static(process.env.PWD + '/dist'));

app.get('*', function (req, res) {
  const index = path.join(process.env.PWD, '/public/index.html');
  res.sendFile(index);
});

app.listen(port, '0.0.0.0')
console.log('server_started');