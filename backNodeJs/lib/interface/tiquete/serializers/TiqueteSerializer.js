const _serializeSingleTiquete = (serializer) => {
    return {
      'id': serializer.id,
      'celdaId': serializer.tiquetes,
      'tipoVehiculo': serializer.celdas,
      'placa': serializer.placa,
      'horaIngreso': serializer.horaIngreso
    };
  };
  
  module.exports = class {
  
    serialize(data) {
      if (!data) {
        throw new Error('Los datos esperados no pueden ser undefined ni null');
      }
      if (Array.isArray(data)) {
        return data.map(_serializeSingleTiquete);
      }
      return _serializeSingleTiquete(data);
    }
  
  };