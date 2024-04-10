"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class Impuestos {
  constructor(montoBrutoAnual, deducciones) {
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }
  get montoBrutoAnual() {
    return this._montoBrutoAnual;
  }
  set montoBrutoAnual(nuevoMonto) {
    this.montoBrutoAnual = nuevoMonto;
  }
  get deducciones() {
    return this._deducciones;
  }
  set deducciones(nuevaDeduccion) {
    this._deducciones = nuevaDeduccion;
  }
}
exports.default = Impuestos;