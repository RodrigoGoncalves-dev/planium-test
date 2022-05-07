const mysql = require('../connection/index');

let Plano = {};

Plano.searchIdPlan = async function searchIdPlan(plan) {
  const query = "SELECT * FROM plans_table WHERE id_plans = (?)";
  const params = [plan.id_plans];

  const result = await mysql.execute(query, params);

  return result;
}

Plano.createPlan = async function createPlan(newPlan) {

  const query = "INSERT INTO plans_table (id_plans, nome, registro) VALUES(?, ?, ?)";
  const params = [newPlan.id_plans, newPlan.nome, newPlan.registro];

  const result = await mysql.execute(query, params);

  return result;
}

module.exports = Plano;