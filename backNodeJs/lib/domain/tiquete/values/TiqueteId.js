module.exports = class{

    constructor(id){

        if(id == '') throw new Error('ERR_TIQUETEID_CANNOT_BE_EMPTHY');

        this.id = id;
    }

}