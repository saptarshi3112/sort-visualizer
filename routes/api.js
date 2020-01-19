const express = require('express');
const router = express.Router();

const mergeSort = require('../implementation/mergesort');
const quickSort = require('../implementation/quicksort');

router.post('/computeSearch', (req, res) => {

  const body = req.body;
  if (!body) {
    res.json('BODY404');
  } else {

    const {
      arr,
      name
    } = body;

    switch (name) {
      case "mergeSort":
        mergeSort.mergeSort(arr)
          .then(res1 => res.json(res1));
        break;
      default:
        break;
    }

  }

});

module.exports = router;
