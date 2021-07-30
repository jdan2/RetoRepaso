module.exports = class{

    constructor(value){

        if(value == '') throw new Error('ERR_PLACA_CANNOT_BE_EMPTHY');

        if(value.length != 6 ) throw new Error('ERR_PLACA_MUST_HAVE_ONLY_SIX_CHARACTERS');

        this.value = value;
    }

}