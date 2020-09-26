/*temas*/
let darks = document.getElementById("customSwitch1")
let retro = document.getElementById("customSwitch2")
let deft = document.getElementsByClassName("def")
let body = document.getElementById("default")
let cont = document.getElementById("container")
let leters = document.getElementById("letras")
let numbers = document.getElementById("numeros")
let botones = document.getElementById("bt")
/*dark.onchange('change',()=>{
    deft.className = 'dark'
})
*/

darks.addEventListener('change', () => {
    deft.className ="black";
    body.className = "black";
    //cont.className = "black";
    leters.className = "black";
    botones.className = "black";
    numbers.className = "black";

    localStorage.setItem('theme', 'dark-1');
})
retro.addEventListener('change', () => {
    deft.className ="retro";
    body.className = "retro";
    //cont.className = "retro";
    leters.className = "retro";
    botones.className = "retro";
    numbers.className = "retro";
    localStorage.setItem('theme', 'retros');
})
/*
deft.addEventListener('change', () => {
    retro.className = "container";

    localStorage.setItem('theme', 'light')
})*/

/*almacenamiento de tema*/
const temaEnStorage = () => {
    const temaGuardado = localStorage.getItem('theme')
    if (temaGuardado == 'dark-1') {

       deft.classList.add("dark")

    } else if (temaGuardado != 'dark-1' || temaGuardado != 'retros') {

        deft.className = "def"

    } else if (temaGuardado == 'retros') {

        deft.classList.add("retro")

    }
}
temaEnStorage()

/*teclas*/

const letras = document.getElementById('letras');
const numeros = document.getElementById('numeros');
const uno = document.getElementById('a1');
const dos = document.getElementById('b2');
const tres = document.getElementById('c3');
const cuatro = document.getElementById('d4');
const cinco = document.getElementById('e5');
const seis = document.getElementById('f6');
const siete = document.getElementById('g7');
const ocho = document.getElementById('h8');
const nueve = document.getElementById('i9');
const cero = document.getElementById('j0');
//const calc = document.getElementById('calculadora');
const reset = document.getElementById('resetear');





/*uno.onclick = function (e) {
    numeros.textContent = numeros.textContent + "1";
}*/


/*
uno = document.getElementById("a1");
console.log(uno.innerHTML);
dos = document.getElementById("b2");
console.log(dos.innerHTML);
tres = document.getElementById("c3");
console.log(tres.innerHTML);
cuatro = document.getElementById("d4");
console.log(cuatro.innerHTML);
cinco = document.getElementById("e5");
console.log(cinco.innerHTML);
seis = document.getElementById("f6");
console.log(seis.innerHTML);
siete = document.getElementById("g7");
console.log(siete.innerHTML);
ocho = document.getElementById("h8");
console.log(ocho.innerHTML);
nueve = document.getElementById("i9");
console.log(nueve.innerHTML);
const cero = document.getElementById("j0");
//console.log(cero.innerHTML);*/




//const pantallaNumeros = numeros.innerHTML;

/*
document.getElementById('a1').onclick = function (e) {
    document.getElementById('numeros').innerHTML + "1";

}*/

/*click teclas*/

uno.onclick = function (e) {
    letras.textContent = letras.textContent + "A";
    numeros.textContent = numeros.textContent + "1";

}
dos.onclick = function (e) {
    letras.textContent = letras.textContent + "B";
    numeros.textContent = numeros.textContent + "2";
    comprobacion();
}
tres.onclick = function (e) {
    letras.textContent = letras.textContent + "C";
    numeros.textContent = numeros.textContent + "3";
    comprobacion();
}
cuatro.onclick = function (e) {
    letras.textContent = letras.textContent + "D";
    numeros.textContent = numeros.textContent + "4";
    comprobacion();
}
cinco.onclick = function (e) {
    letras.textContent = letras.textContent + "E";
    numeros.textContent = numeros.textContent + "5";
    comprobacion();
}
seis.onclick = function (e) {
    letras.textContent = letras.textContent + "F";
    numeros.textContent = numeros.textContent + "6";
    comprobacion();
}
siete.onclick = function (e) {
    letras.textContent = letras.textContent + "G";
    numeros.textContent = numeros.textContent + "7";
    comprobacion();
}
ocho.onclick = function (e) {
    letras.textContent = letras.textContent + "H";
    numeros.textContent = numeros.textContent + "8";
    comprobacion();
}
nueve.onclick = function (e) {
    letras.textContent = letras.textContent + "I";
    numeros.textContent = numeros.textContent + "9";
    comprobacion();
}
cero.onclick = function (e) {
    letras.textContent = letras.textContent + "J";
    numeros.textContent = numeros.textContent + "0";
    comprobacion();
}

reset.onclick = function (e) {
    letras.textContent = "";
    numeros.textContent = "";
}



/*
calc.onclick = function (e) {
    <a href="../Pages/calculadora.html.html"></a>
}*/



/*
cero.onclick = function (e) {

  "j-0".split ("-");

  
  
  //cero.innerHTML;
  //cero.textContent = this.textContent + "0";
  console.log(cero.innerHTML);
}
*/

/*orden*/

function comprobacion() {

    if (letras.textContent != "a", letras.textContent != "ab", letras.textContent != "abc", letras.textContent != "abcd", letras.textContent != "abcde", letras.textContent != "abcdef", letras.textContent != "abcdefg", letras.textContent != "abcdefgh", letras.textContent != "abcdefghi", letras.textContent != "abcdefghij") {
        alert(
            //'Error',
            'Introduzca la teclas en orden',
            //'Error',
        );
    } else if (letras.textContent == "abcdefghij") {
        alert(
            'Muy bien, el ejercicio ha finalizado',
            //'success',
        );
    }
}

comprobacion()