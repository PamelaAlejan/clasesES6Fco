

export default class Cliente {
    constructor(nombre, impuestos) {
        this._nombre = nombre;
        this._impuestos = impuestos;
    }

    get nombre() {     // obtener datos
        return this._nombre;
    }

    set nombre(nombreNuevo) {   // modificar datos
        this.nombre = nombreNuevo;
    }

    calcularImpuesto() {
        return console.log(`${(this._impuestos.montoBrutoAnual - this._impuestos.deducciones) * 0.21}`);
    }

}