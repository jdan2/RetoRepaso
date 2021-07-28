const Tiquete = require('../../../domain/tiquete/Tiquete');

module.exports = (id, {tiqueteRepository})=>{

    const tiquete = new Tiquete(id, null, null);

    return tiqueteRepository.get(tiquete);
}