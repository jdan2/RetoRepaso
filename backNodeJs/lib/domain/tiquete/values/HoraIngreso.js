module.exports = class{

    constructor(value){

        if(value == '') throw new Error('ERR_HORA_INGRESO_CANNOT_BE_EMPTHY');

        this.value = value;
    }

}