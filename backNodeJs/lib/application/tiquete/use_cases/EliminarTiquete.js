module.exports = (tiqueteId, {tiqueteRepository})=>{
    
    return tiqueteRepository.remove(tiqueteId);
}