"use strict";

var _Cliente = _interopRequireDefault(require("./Cliente.js"));
var _Impuesto = _interopRequireDefault(require("./Impuesto.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let primerImpuesto = new _Impuesto.default(100, 20);
let primerCliente = new _Cliente.default("Francisco", new _Impuesto.default(500, 300));
let segundoCliente = new _Cliente.default("Pamela", primerImpuesto);
primerCliente.calcularImpuesto();