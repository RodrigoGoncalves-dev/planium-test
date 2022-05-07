const Plano = require('../models/PlansModel');
const Price = require('../models/PriceModel');

class PriceController {
  async store(req, res) {
    try {
      const price = {
        minimos_vidas: req.body.minimos_vidas,
        faixa1: req.body.faixa1,
        faixa2: req.body.faixa2,
        faixa3: req.body.faixa3,
        id_plans: req.body.id_plans
      }

      const resultPlan = await Plano.searchIdPlan(price);

      if (resultPlan.length === 0) return res.status(404).send({
        message: "Não foi possível encontrar este plano selecionado"
      });

      await Price.createPrice(price);

      const response = {
        message: "Tabela de preços criada com sucesso!",
        price: price,
      }

      return res.status(201).send(response);
    } catch (error) {
      return res.status(400).send(error)
    }
  }
}

module.exports = new PriceController();