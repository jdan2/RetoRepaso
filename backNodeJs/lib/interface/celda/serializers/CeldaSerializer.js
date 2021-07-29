const _serializeSingleCelda = (serializer) => {
    return {
      'celdaId': serializer.celdaId,
      'disponibilidad': serializer.disponibilidad,
      'tipoCelda': serializer.tipoCelda,
    };
  };
  
  module.exports = class {
  
    serialize(data) {
      if (!data) {
        throw new Error('Los datos esperados no pueden ser undefined ni null');
      }
      if (Array.isArray(data)) {
        return data.map(_serializeSingleCelda);
      }
      return _serializeSingleCelda(data);
    }
  
  };