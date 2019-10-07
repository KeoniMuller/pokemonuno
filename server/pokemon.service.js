const utils = require('./utils');

const party = [];

function addPkmnParty(pokemon) {
  if(party.length < 6) {
    party.push(pokemon);
    utils.getImage(pokemon.img, pokemon.name);
    return true
  } 
  return false;
}

function getPkmnParty() {
  return party;
}

module.exports = {
  addPkmnParty,
  getPkmnParty
}

