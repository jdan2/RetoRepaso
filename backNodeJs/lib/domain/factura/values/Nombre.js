module.exports = class{

    constructor(value){

        if(value == '') throw new Error('ERR_NOMBRE_CANNOT_BE_EMPTHY');

        this.value;
    }

}