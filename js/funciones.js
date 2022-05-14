turno = 1;

function juega(boton) {
    if (turno == 1 && document.getElementById(boton).value == "") {
        document.getElementById(boton).value = "X";
        turno++;
    } else if (turno == 2 && document.getElementById(boton).value == "") {
        document.getElementById(boton).value = "O";
        turno--;
    }
    if ((ganador = compruebaGanador()) == "") {
        compruebaTableroLleno();
    } else {
        document.getElementById("ganador").innerHTML = ganador;
        document.getElementById("reiniciar").style.display = "block";
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn5").disabled = true;
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn8").disabled = true;
        document.getElementById("btn9").disabled = true;
    }
}

function compruebaGanador() {
    var resultado = "";
    if ((document.getElementById("btn7").value == "X" && document.getElementById("btn8").value == "X" && document.getElementById("btn9").value == "X") ||
        (document.getElementById("btn4").value == "X" && document.getElementById("btn5").value == "X" && document.getElementById("btn6").value == "X") ||
        (document.getElementById("btn1").value == "X" && document.getElementById("btn2").value == "X" && document.getElementById("btn3").value == "X") ||
        (document.getElementById("btn7").value == "X" && document.getElementById("btn4").value == "X" && document.getElementById("btn1").value == "X") ||
        (document.getElementById("btn8").value == "X" && document.getElementById("btn5").value == "X" && document.getElementById("btn2").value == "X") ||
        (document.getElementById("btn9").value == "X" && document.getElementById("btn6").value == "X" && document.getElementById("btn3").value == "X") ||
        (document.getElementById("btn7").value == "X" && document.getElementById("btn5").value == "X" && document.getElementById("btn3").value == "X") ||
        (document.getElementById("btn1").value == "X" && document.getElementById("btn5").value == "X" && document.getElementById("btn9").value == "X")) {
        resultado = "Ganador Jugador 1";
    } else if ((document.getElementById("btn7").value == "O" && document.getElementById("btn8").value == "O" && document.getElementById("btn9").value == "O") ||
        (document.getElementById("btn4").value == "O" && document.getElementById("btn5").value == "O" && document.getElementById("btn6").value == "O") ||
        (document.getElementById("btn1").value == "O" && document.getElementById("btn2").value == "O" && document.getElementById("btn3").value == "O") ||
        (document.getElementById("btn7").value == "O" && document.getElementById("btn4").value == "O" && document.getElementById("btn1").value == "O") ||
        (document.getElementById("btn8").value == "O" && document.getElementById("btn5").value == "O" && document.getElementById("btn2").value == "O") ||
        (document.getElementById("btn9").value == "O" && document.getElementById("btn6").value == "O" && document.getElementById("btn3").value == "O") ||
        (document.getElementById("btn7").value == "O" && document.getElementById("btn5").value == "O" && document.getElementById("btn3").value == "O") ||
        (document.getElementById("btn1").value == "O" && document.getElementById("btn5").value == "O" && document.getElementById("btn9").value == "O")) {
        resultado = "Ganador Jugador 2";
    }
    return resultado;
}

function compruebaTableroLleno() {
    if (document.getElementById("btn1").value != "" && document.getElementById("btn2").value != "" && document.getElementById("btn3").value != "" && document.getElementById("btn4").value != "" && document.getElementById("btn5").value != "" && document.getElementById("btn6").value != "" && document.getElementById("btn7").value != "" && document.getElementById("btn8").value != "" && document.getElementById("btn9").value != "") {
        document.getElementById("btn1").value = "";
        document.getElementById("btn2").value = "";
        document.getElementById("btn3").value = "";
        document.getElementById("btn4").value = "";
        document.getElementById("btn5").value = "";
        document.getElementById("btn6").value = "";
        document.getElementById("btn7").value = "";
        document.getElementById("btn8").value = "";
        document.getElementById("btn9").value = "";
    }
}

function reiniciar() {
    document.getElementById("btn1").value = "";
    document.getElementById("btn2").value = "";
    document.getElementById("btn3").value = "";
    document.getElementById("btn4").value = "";
    document.getElementById("btn5").value = "";
    document.getElementById("btn6").value = "";
    document.getElementById("btn7").value = "";
    document.getElementById("btn8").value = "";
    document.getElementById("btn9").value = "";

    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn3").disabled = false;
    document.getElementById("btn4").disabled = false;
    document.getElementById("btn5").disabled = false;
    document.getElementById("btn6").disabled = false;
    document.getElementById("btn7").disabled = false;
    document.getElementById("btn8").disabled = false;
    document.getElementById("btn9").disabled = false;

    document.getElementById("ganador").innerHTML = "";

    document.getElementById("reiniciar").style.display = "none";

    turno = 1;
}
