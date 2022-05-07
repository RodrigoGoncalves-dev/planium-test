const Beneficiary = require("../models/BeneficiaryModel");
const Plano = require("../models/PlansModel");
const fs = require('fs');
const path = require("path");
const ProposalController = require("./ProposalController");

const filename = 'beneficiarios.json';

class BeneficiaryController {
  async store(req, res) {
    try {
      const beneficiary = {
        nome: req.body.nome,
        idade: req.body.idade,
        id_beneficiary_main: req.body.id_beneficiary_main,
        id_plans: req.body.id_plans,
      };

      const resultPlan = await Plano.searchIdPlan(beneficiary);

      if (resultPlan.length === 0) return res.status(404).send({
        message: "Não foi criar este beneficiários"
      });

      await Beneficiary.createBeneficiary(beneficiary);

      const response = {
        message: "Beneficiário criado com sucesso!",
        beneficiary: beneficiary
      }

      return res.status(201).send(response);
    } catch (error) {
      console.error(error);
    }
  }

  async index(req, res) {
    try {
      const resultGetBeneficiary = await Beneficiary.getBeneficarys();
      let preco;

      if (resultGetBeneficiary.length === 0) return res.status(404).send({
        message: "Não foi possível encontrar nenhum beneficiário."
      });



      const result = resultGetBeneficiary.map((res) => {

        if (res.idade >= 0 && res.idade <= 17) {
          preco = res.faixa1;
        } else if (res.idade >= 18 && res.idade <= 40) {
          preco = res.faixa2;
        } else if (res.idade > 40) {
          preco = res.faixa3;
        }

        res.precoTotal = preco;

        const somaPrecoTotal = (id) => res.precoTotal * resultGetBeneficiary.filter((a) => a.id_beneficiary_main === id).length;

        return {
          id: res.id_beneficiary,
          id_beneficiario_principal: res.id_beneficiary_main,
          beneficiario_nome: res.nome_beneficiario,
          idade_beneficiario: res.idade,
          plano: {
            nome: res.nome,
            preco: preco,
            precoTotal: somaPrecoTotal(res.id_beneficiary_main),
          }
        };
      });

      fs.writeFileSync(path.resolve(__dirname, "..", "cache", filename), JSON.stringify(result));

      ProposalController.store();

      return res.status(200).send({
        message: "Busca concluída",
        resultado: result,
      });
    } catch (error) {
      return res.status(400).send({ message: "Não foi possível fazer a busca dos dados." })
    }
  }
}

module.exports = new BeneficiaryController();