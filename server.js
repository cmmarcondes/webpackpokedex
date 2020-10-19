const path = require('path');
const express = require('express');
const app = express();
app.set('port', (process.env.PORT || 5000));
process.env.PWD = process.cwd();

app.use(express.static(process.env.PWD + '/dist'));

app.get('*', function (req, res) {
  const index = path.join(process.env.PWD, '/dist/index.html');
  res.sendFile(index);
});


//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
console.log('server_started');