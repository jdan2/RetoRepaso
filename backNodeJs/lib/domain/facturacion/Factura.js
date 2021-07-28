const EmpleadoId = require('./entities/EmpleadoId');
const FacturaId = require('./values/FacturaId')

module.exports = class{

    constructor(facturaId, horaSalida, cantidadHoras, valorTotal, empleadoId){
        this.facturaId = checkFacturaId(facturaId);
        this.horaSalida = horaSalida;
        this.cantidadHoras = cantidadHoras;
        this.valorTotal = valorTotal;
        this.empleadoId = checkEmpleadoId(empleadoId);
    }

    agregarEmpleado(empleado){
        this.empleado = checkEmpleado(empleado);
    }

}

function checkFacturaId(facturaId){
    if(typeof facturaId != FacturaId) throw new Error('ERR_TYPEOF_VARIABLE_NO_CONCIDENCE_FACTURAID');
    return facturaId;
}

function checkEmpleadoId(empleadoId){
    if(typeof empleadoId != EmpleadoId) throw new Error('ERR_TYPEOF_VARIABLE_NO_CONCIDENCE_EMPLEADOID');
    return empleadoId
}