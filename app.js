const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


const port = 5000;
app.listen(port, err => {
  if (err) {
    throw err;
  } else {
    console.log('server on port ' + port);
  }
});
