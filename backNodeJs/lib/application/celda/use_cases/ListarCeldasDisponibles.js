module.exports = ({celdaRepository})=>{

    const celdas = celdaRepository.getAvailableCeldas();
    return celdas;
}