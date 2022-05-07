const mysql = require('../connection/index');

const Beneficiary = {};

Beneficiary.createBeneficiary = async function createBeneficiary(beneficiary) {
  const query = "INSERT INTO beneficiary_table (nome_beneficiario, idade, id_beneficiary_main, id_plans_fk) VALUES(?,?,?,?)";
  const params = [beneficiary.nome, beneficiary.idade, beneficiary.id_beneficiary_main, beneficiary.id_plans];

  const result = await mysql.execute(query, params);

  return result;
}

Beneficiary.getBeneficarys = async function getBeneficarys() {
  const query = `
  SELECT DISTINCT beneficiary_table.nome_beneficiario, 
  beneficiary_table.idade,
  beneficiary_table.id_beneficiary_main,
  beneficiary_table.id_beneficiary,
  plans_table.id_plans,
  prices_table.id_plans,
  plans_table.nome,
  prices_table.faixa1, 
  prices_table.faixa2, 
  prices_table.faixa3
  FROM beneficiary_table
  INNER JOIN plans_table
  ON beneficiary_table.id_plans_fk = plans_table.id_plans
  INNER JOIN prices_table
  ON beneficiary_table.id_plans_fk = prices_table.id_prices;
  `;

  const result = await mysql.execute(query);

  return result;
}

module.exports = Beneficiary;