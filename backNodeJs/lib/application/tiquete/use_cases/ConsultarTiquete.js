const TiqueteId = require('../../../domain/tiquete/values/TiqueteId');

module.exports = (tiqueteId, {tiqueteRepository})=>{

    return tiqueteRepository.get(tiqueteId);
}