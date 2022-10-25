const { getAsync, setAsync } = require('../redis');
const express = require('express');
const router = express.Router();

const configs = require('../util/config')


/* GET statistic data. */
router.get('/', async (req, res) => {
  const todoAmount = await getAsync('todosAdded');
  if (!todoAmount) {
    todoAmount = '0'
  }
  res.send({
    ...configs,
    todoAmount,
  });
});

module.exports = router;
