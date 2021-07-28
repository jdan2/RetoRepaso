const EmpleadoId = require('../values/EmpleadoId');
const Nombre = require('../values/Nombre');
const Correo = require('../values/Correo');

module.exports = class{

    constructor(empleadoId, nombre, correo){
        this.empleadoId = checkEmpleadoId(empleadoId);
        this.nombre = checkNombre(nombre);
        this.correo = checkCorreo(correo);
    }

    actualizarNombre(nombre){
        this.nombre = nombre;
    }

    actualizarCorreo(correo){
        this.correo = correo;
    }

}

function checkEmpleadoId(empleadoId){
    if(typeof empleadoId != EmpleadoId) throw new Error('ERR_TYPEOF_VARIABLE_NO_CONCIDENCE_NOMBRE');
    return empleadoId;
}

function checkNombre(nombre){
    if(typeof nombre != Nombre) throw new Error('ERR_TYPEOF_VARIABLE_NO_CONCIDENCE_NOMBRE');
    return nombre;
}

function checkCorreo(correo){
    if(typeof correo != Correo) throw new Error('ERR_TYPEOF_VARIABLE_NO_CONCIDENCE_CORREO');
    return correo;
}

