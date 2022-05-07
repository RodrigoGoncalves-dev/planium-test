const mysql = require('../connection/index');

let Price = {};

Price.createPrice = async function createPrice(newPrice) {
  const query = "INSERT INTO prices_table ( minimos_vidas, faixa1, faixa2, faixa3, id_plans) VALUES( ?, ?, ?, ?, ?)";
  const params = [newPrice.minimos_vidas, newPrice.faixa1, newPrice.faixa2, newPrice.faixa3, newPrice.id_plans];

  const result = await mysql.execute(query, params);

  return result;
}

module.exports = Price;