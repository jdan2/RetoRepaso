const _serializeSingleEstacionamiento = (serializer) => {
    return {
      'id': serializer.id,
      'tiquetes': serializer.tiquetes,
      'celdas': serializer.celdas
    };
  };
  
  module.exports = class {
  
    serialize(data) {
      if (!data) {
        throw new Error('Los datos esperados no pueden ser undefined ni null');
      }
      if (Array.isArray(data)) {
        return data.map(_serializeSingleEstacionamiento);
      }
      return _serializeSingleEstacionamiento(data);
    }
  
  };