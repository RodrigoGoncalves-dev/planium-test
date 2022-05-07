const { Router } = require('express');
const router = new Router();
const PlanController = require('../controllers/PlansControllers');

router.post('/criar', PlanController.store);

module.exports = router;