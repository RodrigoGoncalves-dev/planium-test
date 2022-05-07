const Plano = require('../models/PlansModel');

class PlansController {
  async store(req, res) {
    try {
      const plano = {
        id_plans: req.body.id_plans,
        nome: req.body.nome,
        registro: req.body.registro,
      }

      await Plano.createPlan(plano);

      const response = {
        message: "Plano inserido com sucesso",
        plan: plano,
      }

      return res.status(201).json(response);
    } catch (error) {
      console.error(error);
      return res.status(400).send(error);
    }
  }
}

module.exports = new PlansController();