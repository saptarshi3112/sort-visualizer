const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const apiRouter = require('./routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

app.use('/api', apiRouter);

const port = 5000;
app.listen(port, err => {
  if (err) {
    throw err;
  } else {
    console.log('server on port ' + port);
  }
});
