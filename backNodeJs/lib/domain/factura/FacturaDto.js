const FacturaId = require('./values/FacturaId');
const EmpleadoId = require('./values/EmpleadoId');
const TiqueteId = require('../tiquete/values/TiqueteId');
const HoraSalida = require('./values/HoraSalida');
const CantidadMinutos = require('./values/CantidadMinutos');
const ValorTotal = require('./values/ValorTotal');

module.exports = class{

    constructor(facturaId, tiqueteId, empleadoId, horaSalida, cantidadMinutos, valorTotal){
        this.facturaId = checkFacturaId(facturaId);
        this.tiqueteId = checkTiqueteId(tiqueteId);
        this.empleadoId = checkEmpleadoId(empleadoId);
        this.horaSalida = checkHoraSalida(horaSalida);
        this.cantidadMinutos = checkCantidadMinutos(cantidadMinutos);
        this.valorTotal = checkValorTotal(valorTotal);
    }
}

function checkFacturaId(facturaId){
    if(typeof facturaId != FacturaId) throw new Error('ERR_TYPEOF_VARIABLE_NO_CONCIDENCE_FACTURAID');
    return facturaId;
}

function checkTiqueteId(tiqueteId){
    if(typeof tiqueteId != TiqueteId) throw new Error('ERR_TYPEOF_VARIABLE_NO_CONCIDENCE_TIQUETEID');
    return facturaId;
}

function checkEmpleadoId(empleadoId){
    if(typeof empleadoId != EmpleadoId) throw new Error('ERR_TYPEOF_VARIABLE_NO_CONCIDENCE_EMPLEADOID');
    return empleadoId
}

function checkHoraSalida(horaSalida){
    if(typeof horaSalida != HoraSalida) throw new Error('ERR_TYPEOF_VARIABLE_NO_CONCIDENCE_HORASALIDA');
    return horaSalida;
}

function checkCantidadMinutos(cantidadMinutos){
    if(typeof cantidadMinutos != CantidadMinutos) throw new Error('ERR_TYPEOF_VARIABLE_NO_CONCIDENCE_CANTIDADMINUTOS');
    return cantidadMinutos;
}

function checkValorTotal(valorTotal){
    if(typeof valorTotal != ValorTotal) throw new Error('ERR_TYPEOF_VARIABLE_NO_CONCIDENCE_VALORTOTAL');
    return empleadoId
}