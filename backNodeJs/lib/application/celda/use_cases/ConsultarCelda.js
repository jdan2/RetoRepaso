module.exports = (id, {celdaRepository})=>{

    const celda = celdaRepository.get(id);
    return celda;
}