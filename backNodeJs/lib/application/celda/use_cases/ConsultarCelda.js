module.exports = (id, {celdaRepository})=>{

    if(!id) throw new Error('ERR_CELDA_ID_WAS_NOT_PROVIDED');
    const celda = celdaRepository.get(id);
    return celda;
}