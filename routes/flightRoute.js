const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.getAllFlight)
router.post('/', controller.createFlight)
router.get('/:id', controller.getAFlight)
router.put('/:id', controller.updateFlight)
router.delete('/:id', controller.deleteFlight)

module.exports = router;

