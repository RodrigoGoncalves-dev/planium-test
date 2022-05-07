const { Router } = require('express');
const BeneficiaryControllers = require('../controllers/BeneficiaryControllers');
const route = new Router();

route.post('/criar', BeneficiaryControllers.store);
route.get('/', BeneficiaryControllers.index);

module.exports = route;