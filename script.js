var cabello = ["normal", "deshidratado", "blanco"];
var grosor = ["grueso", "fino"];
var tipo = ["rizo", "liso"];
var uso = ["Lavar", "Acodicionar", "Rizar", "Alisar"]
var resultado = [0, 0, 0, 0];
var index = 0;
var index2 = 0;
comenzar();

function comenzar() {
    document.getElementById("btnPregunta").hidden = false;
    document.getElementById("btnPregunta2").hidden = false;
    document.getElementById("btnPregunta3").hidden = false;
    document.getElementById("btnPregunta4").hidden = false;
    document.getElementById("btnPregunta11").hidden = true;
    document.getElementById("btnPregunta21").hidden = true;
    document.getElementById("btnPregunta31").hidden = true;

}

function repuesta(i) {
    console.log("has pulsado el boton: " + i)

    resultado[index] = i
    console.log(resultado);
    console.log(index);
    //compruebo en que fase del cuestionario esta
    switch (index) {
        case 0:

            document.getElementById("pregunta").innerHTML = "Tu cabello " + cabello[resultado[0]] + " es..."
            document.getElementById("op1").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + grosor[0];
            document.getElementById("op2").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + grosor[1];
            document.getElementById("op3").hidden = true;
            document.getElementById("atras").hidden = false;
            document.getElementById("cuero").style.visibility = "hidden";
            break;
        case 1:
            document.getElementById("pregunta").innerHTML = "Tu cabello " + cabello[resultado[0]] + " y " + grosor[resultado[1]] + " es..."
            document.getElementById("op1").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + tipo[0];
            document.getElementById("op2").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + tipo[1];
            document.getElementById("op3").hidden = true;
            document.getElementById("atras").hidden = false;
            document.getElementById("cuero").style.visibility = "hidden";
            break;
        case 2:
            document.getElementById("btnPregunta11").hidden = true;
            document.getElementById("btnPregunta21").hidden = true;
            document.getElementById("btnPregunta31").hidden = true;
            document.getElementById("pregunta").innerHTML = "¿Para qué quieres tu producto?"
            document.getElementById("op1").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + uso[0];
            document.getElementById("op2").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + uso[1];
            document.getElementById("op3").hidden = false;
            document.getElementById("op3").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + uso[2];
            document.getElementById("op4").hidden = false;
            document.getElementById("op4").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + uso[3];
            document.getElementById("atras").hidden = false;
            document.getElementById("cuero").style.visibility = "hidden";
            break;
        case 3:
            document.getElementById("pregunta").innerHTML = "Tu producto Philip Martin's es..."
            document.getElementById("btnPregunta").hidden = true;
            document.getElementById("btnPregunta2").hidden = true;
            document.getElementById("btnPregunta3").hidden = true;
            document.getElementById("btnPregunta4").hidden = true;
            document.getElementById("nombre").hidden = false;
            document.getElementById("imagenResultado").hidden = false;
            document.getElementById("pidelo").hidden = false;
            mostrarProducto();
            break;


    }//switch
    //incremento index
    index++
}//respuesta()
function repuestaCuero(i) {
    console.log("has pulsado el boton: " + i)

    //compruebo en que fase del cuestionario esta
    switch (i) {

        case 11:
            document.getElementById("pregunta").innerHTML = "Tu producto Philip Martin's es..."
            document.getElementById("btnPregunta11").hidden = true;
            document.getElementById("btnPregunta21").hidden = true;
            document.getElementById("btnPregunta31").hidden = true;
            document.getElementById("btnPregunta4").hidden = true;
            document.getElementById("nombre").hidden = false;
            document.getElementById("imagenResultado").hidden = false;
            document.getElementById("pidelo").hidden = false;
            document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/CALMING WASH.png'>"
            document.getElementById("nombre").innerHTML = "¡lavamos con Calming wash!"
            document.getElementById("nombre2").hidden = false;
            document.getElementById("nombre3").hidden = false;
            document.getElementById("imagenResultado2").hidden = false;
            document.getElementById("imagenResultado2").innerHTML = "<img src='imagenes/SCALP BENEFIT.png'>"
            document.getElementById("nombre2").innerHTML = "¡Hidratamos con Scalp Benefit!"
            document.getElementById("imagenResultado3").hidden = false;
            document.getElementById("imagenResultado3").innerHTML = "<img src='imagenes/SEA SALT SPRAY.png'>"
            document.getElementById("nombre3").innerHTML = "¡Tratamiento con Sea salt spray !"
            break;
        case 21:
            document.getElementById("pregunta").innerHTML = "Tu producto Philip Martin's es..."
            document.getElementById("btnPregunta11").hidden = true;
            document.getElementById("btnPregunta21").hidden = true;
            document.getElementById("btnPregunta31").hidden = true;
            document.getElementById("btnPregunta4").hidden = true;
            document.getElementById("nombre").hidden = false;
            document.getElementById("imagenResultado").hidden = false;
            document.getElementById("pidelo").hidden = false;
            document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/DARK WASH.png'>"
            document.getElementById("nombre").innerHTML = "¡lavamos con Dark wash!"
            document.getElementById("nombre2").hidden = false;
            document.getElementById("nombre3").hidden = false;
            document.getElementById("imagenResultado2").hidden = false;
            document.getElementById("imagenResultado2").innerHTML = "<img src='imagenes/SCALP BENEFIT.png'>"
            document.getElementById("nombre2").innerHTML = "¡Hidratamos con Scalp Benefit!"

            break;
        case 31:
            document.getElementById("pregunta").innerHTML = "Tu producto Philip Martin's es..."
            document.getElementById("btnPregunta11").hidden = true;
            document.getElementById("btnPregunta21").hidden = true;
            document.getElementById("btnPregunta31").hidden = true;
            document.getElementById("btnPregunta4").hidden = true;
            document.getElementById("nombre").hidden = false;
            document.getElementById("imagenResultado").hidden = false;
            document.getElementById("pidelo").hidden = false;
            document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/PURIFIYNG WASH.png'>"
            document.getElementById("nombre").innerHTML = "¡lavamos con Purifiyng wash!"
            document.getElementById("nombre2").hidden = false;
            document.getElementById("nombre3").hidden = false;
            document.getElementById("imagenResultado2").hidden = false;
            document.getElementById("imagenResultado2").innerHTML = "<img src='imagenes/SCALP NUTRIMENT.png'>"
            document.getElementById("nombre2").innerHTML = "¡Hidratamos con Scalp Benefit!"
            document.getElementById("imagenResultado3").hidden = false;
            document.getElementById("imagenResultado3").innerHTML = "<img src='imagenes/SCALP NUTRIMENT.png'>"
            document.getElementById("nombre3").innerHTML = "¡Tratamiento con Scalp Nutriment !"
            break;


    }//switch
    //incremento index
    index2++
}//respuesta()

function atras2() {
    index2--;
    console.log(resultado);
    console.log(index2);
    //compruebo en que fase del cuestionario esta
    switch (index2) {
        case 0:
            document.getElementById("btnPregunta").hidden = false;
            document.getElementById("btnPregunta2").hidden = false;
            document.getElementById("btnPregunta3").hidden = false;
            document.getElementById("btnPregunta4").hidden = true;
            document.getElementById("btnPregunta11").hidden = true;
            document.getElementById("btnPregunta21").hidden = true;
            document.getElementById("btnPregunta31").hidden = true;
            document.getElementById("pregunta").innerHTML = "¿Cuál es tu tipo de cabello?"
            document.getElementById("op1").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + "Normal";
            document.getElementById("op2").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + "Deshidratado";
            document.getElementById("op3").hidden = false;
            document.getElementById("op3").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + "Blanco";
            document.getElementById("atras2").hidden = true;
            document.getElementById("cuero").style.visibility = "visible";
            break;
        case 1:
            document.getElementById("nombre").hidden = true;
            document.getElementById("imagenResultado").hidden = true;
            document.getElementById("nombre2").hidden = true;
            document.getElementById("imagenResultado2").hidden = true;
            document.getElementById("nombre3").hidden = true;
            document.getElementById("imagenResultado3").hidden = true;
            document.getElementById("pidelo").hidden = true;
            document.getElementById("btnPregunta4").hidden = true;
            document.getElementById("pregunta").innerHTML = "Tu cuero cabelludo es..."
            document.getElementById("btnPregunta").hidden = true;
            document.getElementById("btnPregunta2").hidden = true;
            document.getElementById("btnPregunta3").hidden = true;
            document.getElementById("btnPregunta11").hidden = false;
            document.getElementById("btnPregunta21").hidden = false;
            document.getElementById("btnPregunta31").hidden = false;
            document.getElementById("op11").hidden = false;
            document.getElementById("op21").hidden = false;
            document.getElementById("op31").hidden = false;


            document.getElementById("op11").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + "Graso";
            document.getElementById("op21").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + "Descamacion";
            document.getElementById("op31").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + "Con caída";
            document.getElementById("atras2").hidden = false;
            document.getElementById("cuero").style.visibility = "hidden";
            break;
        case 2:
            document.getElementById("pregunta").innerHTML = "Tu cabello " + cabello[resultado[0]] + " y " + grosor[resultado[1]] + " es..."
            document.getElementById("op1").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + tipo[0];
            document.getElementById("op2").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + tipo[1];
            document.getElementById("op3").hidden = true;
            document.getElementById("op4").hidden = true;
            document.getElementById("atras").hidden = false;
            document.getElementById("cuero").style.visibility = "hidden";
            break;
        case 3:
            document.getElementById("pregunta").innerHTML = "¿Para qué quieres tu producto?"
            document.getElementById("btnPregunta").hidden = false;
            document.getElementById("btnPregunta2").hidden = false;
            document.getElementById("btnPregunta3").hidden = false;
            document.getElementById("btnPregunta4").hidden = false;
            document.getElementById("op1").hidden = false;
            document.getElementById("op1").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + uso[0];
            document.getElementById("op2").hidden = false;
            document.getElementById("op2").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + uso[1];
            document.getElementById("op3").hidden = false;
            document.getElementById("op3").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + uso[2];
            document.getElementById("op4").hidden = false;
            document.getElementById("op4").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + uso[3];
            document.getElementById("atras").hidden = false;
            document.getElementById("cuero").style.visibility = "hidden";
            document.getElementById("nombre").hidden = true;
            document.getElementById("imagenResultado").hidden = true;
            document.getElementById("nombre2").hidden = true;
            document.getElementById("imagenResultado2").hidden = true;
            document.getElementById("nombre3").hidden = true;
            document.getElementById("imagenResultado3").hidden = true;
            document.getElementById("pidelo").hidden = true;
            break;


    }//switch

}//atras()
function atras() {
    index--;
    console.log(resultado);
    console.log(index);
    //compruebo en que fase del cuestionario esta
    switch (index) {
        case 0:
            document.getElementById("pregunta").innerHTML = "¿Cuál es tu tipo de cabello?"
            document.getElementById("op1").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + "Normal";
            document.getElementById("op2").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + "Deshidratado";
            document.getElementById("op3").hidden = false;
            document.getElementById("op3").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + "Blanco";
            document.getElementById("atras").hidden = true;
            document.getElementById("cuero").style.visibility = "visible";
            break;
        case 1:
            document.getElementById("pregunta").innerHTML = "Tu cabello " + cabello[resultado[0]] + " es..."
            document.getElementById("op1").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + grosor[0];
            document.getElementById("op2").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + grosor[1];
            document.getElementById("op3").hidden = true;
            document.getElementById("atras").hidden = false;
            document.getElementById("cuero").style.visibility = "hidden";
            break;
        case 2:
            document.getElementById("pregunta").innerHTML = "Tu cabello " + cabello[resultado[0]] + " y " + grosor[resultado[1]] + " es..."
            document.getElementById("op1").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + tipo[0];
            document.getElementById("op2").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + tipo[1];
            document.getElementById("op3").hidden = true;
            document.getElementById("op4").hidden = true;
            document.getElementById("atras").hidden = false;
            document.getElementById("cuero").style.visibility = "hidden";
            break;
        case 3:
            document.getElementById("pregunta").innerHTML = "¿Para qué quieres tu producto?"
            document.getElementById("btnPregunta").hidden = false;
            document.getElementById("btnPregunta2").hidden = false;
            document.getElementById("btnPregunta3").hidden = false;
            document.getElementById("btnPregunta4").hidden = false;
            document.getElementById("op1").hidden = false;
            document.getElementById("op1").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + uso[0];
            document.getElementById("op2").hidden = false;
            document.getElementById("op2").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + uso[1];
            document.getElementById("op3").hidden = false;
            document.getElementById("op3").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + uso[2];
            document.getElementById("op4").hidden = false;
            document.getElementById("op4").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + uso[3];
            document.getElementById("atras").hidden = false;
            document.getElementById("cuero").style.visibility = "hidden";
            document.getElementById("nombre").hidden = true;
            document.getElementById("imagenResultado").hidden = true;
            document.getElementById("nombre2").hidden = true;
            document.getElementById("imagenResultado2").hidden = true;
            document.getElementById("nombre3").hidden = true;
            document.getElementById("imagenResultado3").hidden = true;
            document.getElementById("pidelo").hidden = true;
            break;


    }//switch
    /* switch (index2) {
         case 0:
             
             document.getElementById("btnPregunta11").hidden = true;
             document.getElementById("btnPregunta21").hidden = true;
             document.getElementById("btnPregunta31").hidden = true;
             document.getElementById("op11").hidden = true;
             document.getElementById("op21").hidden = true;
             document.getElementById("op31").hidden = true;
             document.getElementById("btnPregunta").hidden = false;
             document.getElementById("btnPregunta2").hidden = false;
             document.getElementById("btnPregunta3").hidden = false;
             document.getElementById("op1").hidden = false;
             document.getElementById("op2").hidden = false;
             document.getElementById("op3").hidden = false;
             document.getElementById("pregunta").innerHTML = "¿Cuál es tu tipo de cabello?"
             document.getElementById("op1").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + "Normal";
             document.getElementById("op2").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + "Deshidratado";
             document.getElementById("op3").hidden = false;
             document.getElementById("op3").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + "Blanco";
             document.getElementById("atras").hidden = true;
             document.getElementById("cuero").style.visibility = "visible";
             break;
         }*/
}//atras()

function cueroCabelludo() {
    console.log("estoy en cuero")
    index2++;
    document.getElementById("btnPregunta4").hidden = true;
    document.getElementById("pregunta").innerHTML = "Tu cuero cabelludo es..."
    document.getElementById("btnPregunta").hidden = true;
    document.getElementById("btnPregunta2").hidden = true;
    document.getElementById("btnPregunta3").hidden = true;
    document.getElementById("btnPregunta11").hidden = false;
    document.getElementById("btnPregunta21").hidden = false;
    document.getElementById("btnPregunta31").hidden = false;
    document.getElementById("op11").hidden = false;
    document.getElementById("op21").hidden = false;
    document.getElementById("op31").hidden = false;


    document.getElementById("op11").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + "Graso";
    document.getElementById("op21").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + "Descamacion";
    document.getElementById("op31").innerHTML = "<img src='imagenes/icono.png'style='width:25% ;'>" + "Con caída";
    document.getElementById("atras2").hidden = false;
    document.getElementById("cuero").style.visibility = "hidden";
}
//muestro producto
function mostrarProducto() {
    //pelo normal grueso rizo
    if (resultado[0] == 0 && resultado[1] == 0 && resultado[2] == 0 && resultado[3] == 0) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/COLOUR MANTENINCE.png'>"
        document.getElementById("nombre").innerHTML = "¡Colour Mantenince!"
    }
    else if (resultado[0] == 0 && resultado[1] == 0 && resultado[2] == 0 && resultado[3] == 1) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/COLOUR REPAIR.png'>"
        document.getElementById("nombre").innerHTML = "¡Colour Repair!"

    }
    else if (resultado[0] == 0 && resultado[1] == 0 && resultado[2] == 0 && resultado[3] == 2) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/MORINGA CURL.png'>"
        document.getElementById("nombre").innerHTML = "¡Potion Moringa Curl!"

    }
    else if (resultado[0] == 0 && resultado[1] == 0 && resultado[2] == 0 && resultado[3] == 3) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/POTION CREAM.png'>"
        document.getElementById("nombre").innerHTML = "¡Potion!"

    }
    //pelo normal grueso lizo
    else if (resultado[0] == 0 && resultado[1] == 0 && resultado[2] == 1 && resultado[3] == 0) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/COLOUR MANTENINCE.png'>"
        document.getElementById("nombre").innerHTML = "¡Colour Mantenince!"

    }
    else if (resultado[0] == 0 && resultado[1] == 0 && resultado[2] == 1 && resultado[3] == 1) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/COLOUR REPAIR.png'>"
        document.getElementById("nombre").innerHTML = "¡Colour Repair!"

    }
    else if (resultado[0] == 0 && resultado[1] == 0 && resultado[2] == 1 && resultado[3] == 2) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/ICE GEL.png'>"
        document.getElementById("nombre").innerHTML = "¡Ice gel Air Strong!"

    }
    else if (resultado[0] == 0 && resultado[1] == 0 && resultado[2] == 1 && resultado[3] == 3) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/INFUSION.png'>"
        document.getElementById("nombre").innerHTML = "¡Infusion!"

    }
    //pelo normal fino rizo
    else if (resultado[0] == 0 && resultado[1] == 1 && resultado[2] == 0 && resultado[3] == 0) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/BABASSU WASH.png'>"
        document.getElementById("nombre").innerHTML = "¡Babassu wash!"

    }
    else if (resultado[0] == 0 && resultado[1] == 1 && resultado[2] == 0 && resultado[3] == 1) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/BABASSU RINSE.png'>"
        document.getElementById("nombre").innerHTML = "¡Babassu Rinse!"

    }
    else if (resultado[0] == 0 && resultado[1] == 1 && resultado[2] == 0 && resultado[3] == 2) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/SEA SALT SPRAY.png'>"
        document.getElementById("nombre").innerHTML = "¡Sea salt spray Moringa curl!"

    }
    else if (resultado[0] == 0 && resultado[1] == 1 && resultado[2] == 0 && resultado[3] == 3) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/PLEASURE.png'>"
        document.getElementById("nombre").innerHTML = "¡Pleasure!"

    }
    //pelo normal fino lizo
    else if (resultado[0] == 0 && resultado[1] == 1 && resultado[2] == 1 && resultado[3] == 0) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/BABASSU WASH.png'>"
        document.getElementById("nombre").innerHTML = "¡Babassu wash!"

    }
    else if (resultado[0] == 0 && resultado[1] == 1 && resultado[2] == 1 && resultado[3] == 1) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/BABASSU RINSE.png'>"
        document.getElementById("nombre").innerHTML = "¡Babassu Rinse!"

    }
    else if (resultado[0] == 0 && resultado[1] == 1 && resultado[2] == 1 && resultado[3] == 2) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/NTURAL MOUSSE.png'>"
        document.getElementById("nombre").innerHTML = "¡Sea salt spray Natural Mousse!"

    }
    else if (resultado[0] == 0 && resultado[1] == 1 && resultado[2] == 1 && resultado[3] == 3) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/PLEASURE.png'>"
        document.getElementById("nombre").innerHTML = "¡Pleasure!"

    }
    //pelo seco grueso rizo
    else if (resultado[0] == 1 && resultado[1] == 0 && resultado[2] == 0 && resultado[3] == 0) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/MORINGA WASH.png'>"
        document.getElementById("nombre").innerHTML = "Moringa wash!"

    }
    else if (resultado[0] == 1 && resultado[1] == 0 && resultado[2] == 0 && resultado[3] == 1) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/MORINGA RINSE.png'>"
        document.getElementById("nombre").innerHTML = "¡Moringa Rinse!"

    }
    else if (resultado[0] == 1 && resultado[1] == 0 && resultado[2] == 0 && resultado[3] == 2) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/MORINGA CURL.png'>"
        document.getElementById("nombre").innerHTML = "¡Moringa Curl!"

    }
    else if (resultado[0] == 1 && resultado[1] == 0 && resultado[2] == 0 && resultado[3] == 3) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/INFINITO.png'>"
        document.getElementById("nombre").innerHTML = "¡Infinito!"

    }
    //pelo seco grueso lizo
    else if (resultado[0] == 1 && resultado[1] == 0 && resultado[2] == 1 && resultado[3] == 0) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/MORINGA WASH.png'>"
        document.getElementById("nombre").innerHTML = "Moringa wash!"

    }
    else if (resultado[0] == 1 && resultado[1] == 0 && resultado[2] == 1 && resultado[3] == 1) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/MORINGA RINSE.png'>"
        document.getElementById("nombre").innerHTML = "¡Moringa Rinse!"

    }
    else if (resultado[0] == 1 && resultado[1] == 0 && resultado[2] == 1 && resultado[3] == 2) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/MORINGA CURL.png'>"
        document.getElementById("nombre").innerHTML = "¡Moringa Curl!"

    }
    else if (resultado[0] == 1 && resultado[1] == 0 && resultado[2] == 1 && resultado[3] == 3) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/INFINITO.png'>"
        document.getElementById("nombre").innerHTML = "¡Infinito!"

    }
    //pelo seco fino rizo
    else if (resultado[0] == 1 && resultado[1] == 1 && resultado[2] == 0 && resultado[3] == 0) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/MORINGA WASH.png'>"
        document.getElementById("nombre").innerHTML = "Moringa wash!"

    }
    else if (resultado[0] == 1 && resultado[1] == 1 && resultado[2] == 0 && resultado[3] == 1) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/MORINGA RINSE.png'>"
        document.getElementById("nombre").innerHTML = "¡Moringa Rinse!"

    }
    else if (resultado[0] == 1 && resultado[1] == 1 && resultado[2] == 0 && resultado[3] == 2) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/BABASSU SPRAY.png'>"
        document.getElementById("nombre").innerHTML = "¡babassu spray Moringa curl!"

    }
    else if (resultado[0] == 1 && resultado[1] == 1 && resultado[2] == 0 && resultado[3] == 3) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/3 WAYS.png'>"
        document.getElementById("nombre").innerHTML = "¡3 Ways!"

    }
    //pelo seco fino liso
    else if (resultado[0] == 1 && resultado[1] == 1 && resultado[2] == 1 && resultado[3] == 0) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/EVERYDAY WASH.png'>"
        document.getElementById("nombre").innerHTML = "Everyday wash!"

    }
    else if (resultado[0] == 1 && resultado[1] == 1 && resultado[2] == 1 && resultado[3] == 1) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/EVERYDAY RINSE.png'>"
        document.getElementById("nombre").innerHTML = "Everyday Rinse!"

    }
    else if (resultado[0] == 1 && resultado[1] == 1 && resultado[2] == 1 && resultado[3] == 2) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/ICE GEL.png'>"
        document.getElementById("nombre").innerHTML = "¡Ice gel!"

    }
    else if (resultado[0] == 1 && resultado[1] == 1 && resultado[2] == 1 && resultado[3] == 3) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/BABASSU SPRAY.png'>"
        document.getElementById("nombre").innerHTML = "¡Babassu spray!"

    }
    //pelo blanco rizo
    else if (resultado[0] == 2 && resultado[1] == 1 && resultado[2] == 0 && resultado[3] == 0) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/BLUE SHAMPOO.png'>"
        document.getElementById("nombre").innerHTML = "¡Blue Shampoo 1 vez por semana!"
        document.getElementById("nombre2").hidden = false;
        document.getElementById("imagenResultado2").hidden = false;
        document.getElementById("imagenResultado2").innerHTML = "<img src='imagenes/CALMING WASH.png'>"
        document.getElementById("nombre2").innerHTML = "Calming wash diario!"

    }
    else if (resultado[0] == 2 && resultado[1] == 1 && resultado[2] == 0 && resultado[3] == 1) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/BLUE RINSE.png'>"
        document.getElementById("nombre").innerHTML = "¡Blue Rinse 1 vez por semana!"
        document.getElementById("nombre2").hidden = false;
        document.getElementById("imagenResultado2").hidden = false;
        document.getElementById("imagenResultado2").innerHTML = "<img src='imagenes/SCALP BENEFIT.png'>"
        document.getElementById("nombre2").innerHTML = "¡Scal Benefit diario!"

    }
    else if (resultado[0] == 2 && resultado[1] == 1 && resultado[2] == 0 && resultado[3] == 2) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/MORINGA CURL.png'>"
        document.getElementById("nombre").innerHTML = "¡Moringa Curl!"

    }
    else if (resultado[0] == 2 && resultado[1] == 1 && resultado[2] == 0 && resultado[3] == 3) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/INFUSION.png'>"
        document.getElementById("nombre").innerHTML = "¡Infusion!"

    }
    //pelo blanco liso
    else if (resultado[0] == 2 && resultado[1] == 1 && resultado[2] == 1 && resultado[3] == 0) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/BLUE SHAMPOO.png'>"
        document.getElementById("nombre").innerHTML = "¡Blue Shampoo 1 vez por semana!"
        document.getElementById("nombre2").hidden = false;
        document.getElementById("imagenResultado2").hidden = false;
        document.getElementById("imagenResultado2").innerHTML = "<img src='imagenes/CALMING WASH.png'>"
        document.getElementById("nombre2").innerHTML = "Calming wash diario!"

    }
    else if (resultado[0] == 2 && resultado[1] == 1 && resultado[2] == 1 && resultado[3] == 1) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/BLUE RINSE.png'>"
        document.getElementById("nombre").innerHTML = "¡Blue Rinse 1 vez por semana!"
        document.getElementById("nombre2").hidden = false;
        document.getElementById("imagenResultado2").hidden = false;
        document.getElementById("imagenResultado2").innerHTML = "<img src='imagenes/SCALP BENEFIT.png'>"
        document.getElementById("nombre2").innerHTML = "¡Scal Benefit diario!"

    }
    else if (resultado[0] == 2 && resultado[1] == 1 && resultado[2] == 1 && resultado[3] == 2) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/NTURAL MOUSSE.png'>"
        document.getElementById("nombre").innerHTML = "¡Natural mousse!"

    }
    else if (resultado[0] == 2 && resultado[1] == 1 && resultado[2] == 1 && resultado[3] == 3) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/SEA SALT SPRAY.png'>"
        document.getElementById("nombre").innerHTML = "¡Sea salt spray!"

    }
    //pelo blanco rizo
    else if (resultado[0] == 2 && resultado[1] == 0 && resultado[2] == 0 && resultado[3] == 0) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/BLUE SHAMPOO.png'>"
        document.getElementById("nombre").innerHTML = "¡Blue Shampoo 1 vez por semana!"
        document.getElementById("nombre2").hidden = false;
        document.getElementById("imagenResultado2").hidden = false;
        document.getElementById("imagenResultado2").innerHTML = "<img src='imagenes/CALMING WASH.png'>"
        document.getElementById("nombre2").innerHTML = "Calming wash diario!"

    }
    else if (resultado[0] == 2 && resultado[1] == 0 && resultado[2] == 0 && resultado[3] == 1) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/BLUE RINSE.png'>"
        document.getElementById("nombre").innerHTML = "¡Blue Rinse 1 vez por semana!"
        document.getElementById("nombre2").hidden = false;
        document.getElementById("imagenResultado2").hidden = false;
        document.getElementById("imagenResultado2").innerHTML = "<img src='imagenes/SCALP BENEFIT.png'>"
        document.getElementById("nombre2").innerHTML = "¡Scal Benefit diario!"

    }
    else if (resultado[0] == 2 && resultado[1] == 0 && resultado[2] == 0 && resultado[3] == 2) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/MORINGA CURL.png'>"
        document.getElementById("nombre").innerHTML = "¡Moringa Curl!"

    }
    else if (resultado[0] == 2 && resultado[1] == 0 && resultado[2] == 0 && resultado[3] == 3) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/INFUSION.png'>"
        document.getElementById("nombre").innerHTML = "¡Infusion!"

    }
    //pelo blanco liso
    else if (resultado[0] == 2 && resultado[1] == 0 && resultado[2] == 1 && resultado[3] == 0) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/BLUE SHAMPOO.png'>"
        document.getElementById("nombre").innerHTML = "¡Blue Shampoo 1 vez por semana!"
        document.getElementById("nombre2").hidden = false;
        document.getElementById("imagenResultado2").hidden = false;
        document.getElementById("imagenResultado2").innerHTML = "<img src='imagenes/CALMING WASH.png'>"
        document.getElementById("nombre2").innerHTML = "Calming wash diario!"

    }
    else if (resultado[0] == 2 && resultado[1] == 0 && resultado[2] == 1 && resultado[3] == 1) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/BLUE RINSE.png'>"
        document.getElementById("nombre").innerHTML = "¡Blue Rinse 1 vez por semana!"
        document.getElementById("nombre2").hidden = false;
        document.getElementById("imagenResultado2").hidden = false;
        document.getElementById("imagenResultado2").innerHTML = "<img src='imagenes/SCALP BENEFIT.png'>"
        document.getElementById("nombre2").innerHTML = "¡Scal Benefit diario!"

    }
    else if (resultado[0] == 2 && resultado[1] == 0 && resultado[2] == 1 && resultado[3] == 2) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/NTURAL MOUSSE.png'>"
        document.getElementById("nombre").innerHTML = "¡Natural mousse!"

    }
    else if (resultado[0] == 2 && resultado[1] == 0 && resultado[2] == 1 && resultado[3] == 3) {
        document.getElementById("imagenResultado").innerHTML = "<img src='imagenes/SEA SALT SPRAY.png'>"
        document.getElementById("nombre").innerHTML = "¡Sea salt spray!"

    }
}


