//Bloque de captura de botones
var btnEncriptar = document.getElementById('btn-encriptar');
var btnDesencriptar = document.getElementById('btn-desencriptar');

//Opcion por defecto para ocultar mensaje
document.getElementById('mensaje-salida').style.display = 'none';
document.getElementById('btn-copiar').style.display = 'none';



//Bloque que toma los botones y los comunica con un evento para desencadenar
//una acción
btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desencriptar);



function encriptar(){
    //Captura del texto de entrada a trabajar en variable
    var textoEntrada = document.getElementById('texto-entrada').value;

    textoEntrada = textoEntrada.toLowerCase();
    
    //Recoger el texto de entrada
    //Crear una matriz de claves bidimencional
    //ir buscando concidencias(includes) con la matriz de claves e ir intercambiandolas(replace)
    
    var claves = [["e", "enter"],
                    ["i", "imes"],
                    ["a", "ai"],
                    ["o", "ober"],
                    ["u", "ufat"]];

    for(var i=0; i<claves.length;i++){
        if(textoEntrada.includes(claves[i][0])){
            textoEntrada = textoEntrada.replaceAll(claves[i][0],claves[i][1]);
        }
    }

    console.log(textoEntrada);

    //Elementos a ocultar via css
    document.querySelector(".container-img").style.display = 'none';
    document.querySelector(".items > h2").style.display = 'none';
    document.querySelector(".items > h3").style.display = 'none';

    document.querySelector("#mensaje-salida").style.display = 'block';
    document.querySelector("#mensaje-encriptado").value = textoEntrada;
    document.getElementById('btn-copiar').style.display = 'block';

    document.querySelector('#texto-entrada').value = "";



}

function desencriptar(){
    //Captura del texto de entrada a trabajar en variable
    var textoEntrada = document.getElementById('texto-entrada').value;

    textoEntrada = textoEntrada.toLowerCase();
    
    //Recoger el texto de entrada
    //Crear una matriz de claves bidimencional
    //ir buscando concidencias(includes) con la matriz de claves e ir intercambiandolas(replace)
    
    var claves = [["e", "enter"],
                    ["i", "imes"],
                    ["a", "ai"],
                    ["o", "ober"],
                    ["u", "ufat"]];

    for(var i=0; i<claves.length;i++){
        if(textoEntrada.includes(claves[i][1])){
            textoEntrada = textoEntrada.replaceAll(claves[i][1],claves[i][0]);
        }
    }

    console.log(textoEntrada);

    //Elementos a ocultar via css
    document.querySelector(".container-img").style.display = 'none';
    document.querySelector(".items > h2").style.display = 'none';
    document.querySelector(".items > h3").style.display = 'none';

    document.querySelector("#mensaje-salida").style.display = 'block';
    document.querySelector("#mensaje-encriptado").value = textoEntrada;
    document.getElementById('btn-copiar').style.display = 'block';

    document.querySelector('#texto-entrada').value = "";
}
