const FacturacionId = require('./values/FacturacionId');
const ParkingId = require('./values/ParkingId');
const Factura = require('./entities/Factura');
const Empleado = require('./entities/Empleado');

module.exports = class{

    constructor(facturacionId, parkingId, empleado, factura){
        this.facturacionId = checkFacturacionId(facturacionId);
        this.parkingId = checkParkingId(parkingId);
        this.empleado = checkEmpleado(empleado);
        this.factura = checkFactura(factura);
    }
}

function checkFacturacionId(facturacionId){
    if(typeof facturacionId != FacturacionId) throw new Error('ERR_TYPEOF_VARIABLE_NO_CONCIDENCE_FACTURACIONID');
    return facturacionId;
}

function checkParkingId(parkingId){
    if(typeof parkingId != ParkingId) throw new Error('ERR_TYPEOF_VARIABLE_NO_CONCIDENCE_PARKINGID');
    return parkingId;
}

function checkFactura(factura){
    if(typeof factura != Factura) throw new Error('ERR_TYPEOF_VARIABLE_NO_CONCIDENCE_FACTURA');
    return factura
}

function checkEmpleado(empleado){
    if(typeof empleado != Empleado) throw new Error('ERR_TYPEOF_VARIABLE_NO_CONCIDENCE_EMPLEADO');
    return empleado
}