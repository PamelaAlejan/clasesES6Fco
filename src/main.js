import Cliente from './Cliente.js';
import Impuestos from './Impuesto.js';

let primerImpuesto = new Impuestos(100, 20);

let primerCliente = new Cliente("Francisco", new Impuestos(500, 300))
let segundoCliente = new Cliente("Pamela", primerImpuesto)

primerCliente.calcularImpuesto();