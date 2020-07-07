var minhaVariavel = 'minha variável';
function soma(x, y) {
    return x + y;
}
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (numero) { return numero * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.somar = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
