const { Router } = require('express');
const router = new Router();
const PriceController = require('../controllers/PriceControllers');

router.post('/criar', PriceController.store);

module.exports = router;