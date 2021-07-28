module.exports = class{

    constructor(value){

        if(value == '') throw new Error('ERR_CELDAASIGNADA_CANNOT_BE_EMPTHY');

        if(value.length < 3 ) throw new Error('ERR_CELDAASIGNADA_MUST_HAVE_FIVE_CHARACTERS_AT_LEAST');

        if(value.length < 7 ) throw new Error('ERR_CELDAASIGNADA_MUST_HAVE_MORE_THAN_SEVEN_CHARACTERS');

        this.value = value;
    }

}