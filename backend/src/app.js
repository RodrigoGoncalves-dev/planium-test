const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyparse = require('body-parser');

const planRoutes = require('./routes/PlanRoutes');
const priceRoutes = require('./routes/PriceRoutes');
const beneficiaryRoutes = require('./routes/BeneficiaryRoutes');

app.use(cors('*'));
app.use(morgan('dev'));

app.use(bodyparse.urlencoded({ extended: false }));
app.use(bodyparse.json());

app.use('/planos', planRoutes);
app.use('/precos', priceRoutes);
app.use('/beneficiario', beneficiaryRoutes);

module.exports = app;