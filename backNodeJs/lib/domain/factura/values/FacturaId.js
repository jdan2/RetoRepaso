module.exports = class{

    constructor(id){

        if(id == '') throw new Error('ERR_FACTURAID_CANNOT_BE_EMPTHY');

        this.id = id;
    }

}