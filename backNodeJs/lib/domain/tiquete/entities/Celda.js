

module.exports = class {

    constructor(celdaId, disponibilidad, tipoCelda) {
      this.celdaId = celdaId;
      this.disponibilidad = disponibilidad;
      this.tipoCelda = tipoCelda;
    }

    cambiarDisponibilidad(disponibilidad){
        this.disponibilidad = disponibilidad;
    }

    cambiarTipoCelda(tipoCelda){
        this.tipoCelda = tipoCelda;
    }
    
  };