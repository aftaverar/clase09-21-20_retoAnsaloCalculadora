/*variables y operaciones*/
let variable1;
let variable2;
let operacion;
/*otras teclas*/

/* llamar teclas y pantalla*/

    let pantalla = document.getElementById('pantalla');
    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    let cuatro = document.getElementById('cuatro');
    let cinco = document.getElementById('cinco');
    let seis = document.getElementById('seis');
    let siete = document.getElementById('siete');
    let ocho = document.getElementById('ocho');
    let nueve = document.getElementById('nueve');
    let cero = document.getElementById('cero');
    let decimal = document.getElementById('decimal');
    let unoSobreX = document.getElementById('unoSobreX');
    let raiz = document.getElementById('raiz');
    let alCuadrado = document.getElementById('alCuadrado');
    let porcentaje = document.getElementById('porcentaje');
    let igual = document.getElementById('igual');
    let suma = document.getElementById('suma');
    let resta = document.getElementById('resta');
    let division = document.getElementById('division');
    let multiplicacion = document.getElementById('multiplicacion');
    let posNeg = document.getElementById('posNeg');
    let clear = document.getElementById('clear');
    let clearAll = document.getElementById('clearAll');
    let borrar = document.getElementById('borrar');




function limpiar() {
    pantalla.textContent = "";
}

function reset() {
    pantalla.textContent = "";
    variable1 = 0;
    variable2 = 0;
    operacion = "";
}


/*click numeros*/
cero.onclick = function (e) {
    pantalla.textContent = pantalla.textContent + "0";
}
uno.onclick = function (e) {
    pantalla.textContent = pantalla.textContent + "1";
}
dos.onclick = function (e) {
    pantalla.textContent = pantalla.textContent + "2";
}
tres.onclick = function (e) {
    pantalla.textContent = pantalla.textContent + "3";
}
cuatro.onclick = function (e) {
    pantalla.textContent = pantalla.textContent + "4";
}
cinco.onclick = function (e) {
    pantalla.textContent = pantalla.textContent + "5";
}
seis.onclick = function (e) {
    pantalla.textContent = pantalla.textContent + "6";
}
siete.onclick = function (e) {
    pantalla.textContent = pantalla.textContent + "7";
}
ocho.onclick = function (e) {
    pantalla.textContent = pantalla.textContent + "8";
}
nueve.onclick = function (e) {
    pantalla.textContent = pantalla.textContent + "9";
}

/*click teclas*/
clearAll.onclick = function (e) {
    reset();
}
clear.onclick = function (e) {
    pantalla.textContent = "";
    variable2 = "";
}
borrar.onclick = function (e) {
    pantalla.textContent = pantalla.textContent - "";
}
suma.onclick = function (e) {
    variable1 = pantalla.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function (e) {
    variable1 = pantalla.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function (e) {
    variable1 = pantalla.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function (e) {
    variable1 = pantalla.textContent;
    operacion = "/";
    limpiar();
}

unoSobreX.onclick = function (e) {
    pantalla.textContent = "1" + "/" + pantalla.textContent;
    operacion = " 1/"
    resultado();
}

raiz.onclick = function (e) {
    pantalla.textContent = pantalla.textContent;
    operacion = "√";
    resultado();
}

alCuadrado.onclick = function (e) {
    pantalla.textContent = pantalla.textContent + "^2";
    operacion = "^2";
    resultado()
}
//posNeg.onclick=function(e){
//pantalla.textContent = "-" + pantalla.textContent;        
//}
//decimal.onclick=function(e){
//pantalla.textContent = pantalla.textContent + ".";        
//}

porcentaje.onclick = function (e) {
    pantalla.textContent = pantalla.textContent + "%";
    operacion = "%";
    resultado()
}

igual.onclick = function (e) {
    variable2 = pantalla.textContent;
    resultado();
}

/*operaciones*/

function resultado() {
    let res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(variable1) + parseFloat(variable2);
            break;
        case "-":
            res = parseFloat(variable1) - parseFloat(variable2);
            break;
        case "*":
            res = parseFloat(variable1) * parseFloat(variable2);
            break;
        case "/":
            res = parseFloat(variable1) / parseFloat(variable2);
            break;

        case "1/":
            res = 1 / parseFloat(variable1);
            break;
        case "%":
            res = parseFloat(variable1) / 100;
            break;
        case "√":
            res = Math.sqrt(parseFloat(variable1));
            break;
        case "^2":
            res = parseFloat(variable1) * parseFloat(variable1)
            break;

    }
    reset();
    resultado.textContent = res;
    pantalla.textContent = pantalla.textContent;
}




/*
const operacion 
switch (operacion) {
    case suma:
        
        break;

    default:
        break;
}
*/


/*memoria*/