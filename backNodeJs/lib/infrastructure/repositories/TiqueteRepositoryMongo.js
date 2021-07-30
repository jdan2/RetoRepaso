'use strict';

const FacturaDto = require('../../domain/factura/FacturaDto');
const MongooseFactura = require('../orm/mongoose/schemas/FacturaSchema');
const FacturaRepository = require('../../domain/factura/FacturaRepository');

module.exports = class extends FacturaRepository {

  constructor() {
    super();
  }

};
