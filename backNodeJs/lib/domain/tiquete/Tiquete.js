const TiqueteId = require('./values/TiqueteId');
const CeldaId = require('./values/CeldaId');
const TipoVehiculo = require('./values/TipoVehiculo');
const Placa = require('./values/Placa');
const HoraIngreso = require('./values/HoraIngreso');

module.exports = class{

    constructor(tiqueteId, celdaId, tipoVehiculo, placa, horaIngreso){
        this.tiqueteId = tiqueteId;
        this.celdaId = celdaId;
        this.tipoVehiculo = tipoVehiculo; 
        this.placa = placa;
        this.horaIngreso = horaIngreso;
    }

    getTiqueteId(){
        return this.tiqueteId;
    }

    getCeldaId(){
        return this.celdaId;
    }

    getTipoVehiculo(){
        return this.tipoVehiculo;
    }

    getPlaca(){
        return this.placa;
    }

    getHoraIngreso(){
        return this.horaIngreso;
    }

}


function checkTiqueteId(tiqueteId){
    if(typeof tiqueteId != TiqueteId) throw new Error('ERR_TYPEOF_VARIABLE_NO_CONCIDENCE_TIQUETEID');
    return tiqueteId;
}

function checkCeldaId(celdaId){
    if(typeof celdaId != CeldaId) throw new Error('ERR_TYPEOF_VARIABLE_NO_CONCIDENCE_CELDAID');
    return celdaId;
}

function checkTipoVehiculo(tipoVehiculo){
    if(typeof tipoVehiculo != TipoVehiculo) throw new Error('ERR_TYPEOF_VARIABLE_NO_CONCIDENCE_TIPOVEHICULO');
    return tipoVehiculo;
}

function checkPlaca(placa){
    if(typeof placa != Placa) throw new Error('ERR_TYPEOF_VARIABLE_NO_CONCIDENCE_PLACA');
    return placa;
}

function checkHoraIngreso(horaIngreso){
    if(typeof horaIngreso != HoraIngreso) throw new Error('ERR_TYPEOF_VARIABLE_NO_CONCIDENCE_HORAINGRESO');
    return horaIngreso;
}