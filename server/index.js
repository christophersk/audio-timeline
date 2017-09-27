const app = require('./app');

app.listen(3002, err => {
  if (err) throw err;
  console.log('server listening on port 3002');
});
