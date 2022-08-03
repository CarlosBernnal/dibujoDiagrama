var texto = document.getElementById("texto_lineas");

var botonDibujar = document.getElementById("btnDibujar");
botonDibujar.addEventListener("click", dibujoPorClick);

var botonLimpiar = document.getElementById("btnLimpiar");
botonLimpiar.addEventListener("click", limpiar);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function limpiar() {
    location.reload();
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick(){
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi,xf,yi2,xf2;
    var colorLineas = "#39FF14";
    var espacio = ancho / lineas;

    for(l = 0; l < lineas; l++)
    {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorLineas, 0, yi, xf, 400);
    console.log("Linea " + l);
    }

    for(i = 0; i < lineas; i++)
    {
    xi2 = espacio * i;
    yf2 = espacio * (i + 1);
    dibujarLinea(colorLineas, xi2, 0, 400, yf2);
    console.log("Linea " + i);
    }

    dibujarLinea(colorLineas, 1,1,1,399);
    dibujarLinea(colorLineas, 1,399,399,399);

    dibujarLinea(colorLineas, 399,1,399,399);
    dibujarLinea(colorLineas, 1,1,399,1);
}