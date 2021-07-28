module.exports = class {

    constructor(value) {

        if(value == '') throw new Error('ERR_TIPOVEHICULO_CANNOT_BE_EMPTHY');

        if(value.length < 5 ) throw new Error('ERR_TIPOVEHICULO_MUST_HAVE_FIVE_CHARACTERS_AT_LEAST');

        this.value = value;

    }
  
  };