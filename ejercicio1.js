let rojo = 'rgb(255, 0, 0)';
let azul ='rgb(0, 0, 255)';
let verde = 'rgb(0, 255, 0)';
let cont = 0;
var input = document.getElementById("input1");
let loop;
var coche = {
estilo : "vintage",
color : "rosa palo",
precio : 16000
}
var casa = {
    espacio : 250,
    localizacion : "Madrid",
    precio : 300000
    }


function comprobar(){
    if(input.value == "alert(coche.precio + casa.precio)"){
    loop = setInterval(function(){cambioDeColor()},250);
    body.innerHTML = '<div class="target">Lo has conseguido😍😎</div>';
    window.setTimeout(function() {
        clearInterval(loop);
        body.style.backgroundColor = "#fff";
    }, 2000);
}else{
    alert('Mal hecho🥺🤷‍♂️')
}
}


function cambioDeColor(){
    let body  = document.getElementById("body");
    if(cont === 0){
        body.style.backgroundColor = rojo;
        cont++;
    }else if(cont === 1){
        body.style.backgroundColor = azul;
        cont++;
    }else if(cont == 2){
        body.style.backgroundColor = verde;
        cont = cont -2;
    }
}



