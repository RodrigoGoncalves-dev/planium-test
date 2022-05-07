const fs = require('fs');
const path = require('path');

class ProposalController {
  async store() {
    let filenameBeneficiarios = 'beneficiarios.json';
    let filenamePlanos = 'plans.json';
    let filenamePrecos = 'prices.json';
    let newFilename = 'proposta.json';

    let finalList = {};

    const fileContent1 = fs.readFileSync(path.resolve(__dirname, "..", "cache", filenameBeneficiarios));
    const fileContent2 = fs.readFileSync(path.resolve(__dirname, "..", "cache", filenamePlanos));
    const fileContent3 = fs.readFileSync(path.resolve(__dirname, "..", "cache", filenamePrecos));

    const content1 = JSON.parse(fileContent1.toString());
    const content2 = JSON.parse(fileContent2.toString());
    const content3 = JSON.parse(fileContent3.toString());

    finalList.beneficiarios = content1;
    finalList.planos = content2;
    finalList.precos = content3;

    fs.writeFileSync(path.resolve(__dirname, "..", "cache", newFilename), JSON.stringify(finalList));
  }
}

module.exports = new ProposalController();