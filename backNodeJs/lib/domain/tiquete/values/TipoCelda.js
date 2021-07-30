module.exports = class {

    constructor(value) {

        if(value == '') throw new Error('ERR_TIPO_CELDA_CANNOT_BE_EMPTHY');

        this.value = value;

    }
  
  };