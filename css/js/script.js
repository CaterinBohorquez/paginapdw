// EJERCICIO 1
function sumar() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let resultado = n1 + n2;

    document.getElementById("resultadoSuma").innerText =
        "Resultado: " + resultado;
}

// EJERCICIO 2
function cambiarColor() {
    document.body.style.background =
        "linear-gradient(135deg, #ff512f, #dd2476)";
}

// EJERCICIO 3
function verificarEdad() {
    let edad = document.getElementById("edad").value;
    let mensaje = "";

    if (edad >= 18) {
        mensaje = "Eres mayor de edad";
    } else {
        mensaje = "Eres menor de edad";
    }

    document.getElementById("mensajeEdad").innerText = mensaje;
}

// EJERCICIO 4
function actualizarReloj() {
    let ahora = new Date();
    document.getElementById("reloj").innerText =
        ahora.toLocaleTimeString();
}

setInterval(actualizarReloj, 1000);


// Validación
function validarFormulario() {
    let nombre = document.getElementById("nombre2").value;
    let correo = document.getElementById("correo2").value;

    if (nombre === "" || correo === "") {
        document.getElementById("mensajeForm").innerText =
            "Todos los campos son obligatorios";
    } else {
        document.getElementById("mensajeForm").innerText =
            "Formulario enviado correctamente";
    }
}

// Contador
let count = 0;

function incrementar() {
    count++;
    document.getElementById("contador").innerText = count;
}

function disminuir() {
    count--;
    document.getElementById("contador").innerText = count;
}

// Modo oscuro
function toggleModo() {
    document.body.classList.toggle("oscuro");
}

// Número aleatorio
function generarNumero() {
    let numero = Math.floor(Math.random() * 100);
    document.getElementById("numeroRandom").innerText =
        "Número generado: " + numero;
}


// LocalStorage
function guardarNombre() {
    let nombre = document.getElementById("nombreGuardar").value;
    localStorage.setItem("nombre", nombre);
    document.getElementById("nombreMostrado").innerText =
        "Guardado: " + nombre;
}

// Lista dinámica
function agregarItem() {
    let item = document.getElementById("itemLista").value;
    let li = document.createElement("li");
    li.textContent = item;
    document.getElementById("lista").appendChild(li);
}

// Mostrar/Ocultar
function toggleTexto() {
    let texto = document.getElementById("textoOculto");

    if (texto.style.display === "none") {
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }
}


function login() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user === "admin" && pass === "1234") {
        document.getElementById("mensajeLogin").innerText =
            "Acceso Correcto";
    } else {
        document.getElementById("mensajeLogin").innerText =
            "Credenciales Incorrectas";
    }
}

function calcularPromedio() {
    let n1 = parseFloat(document.getElementById("nota1").value);
    let n2 = parseFloat(document.getElementById("nota2").value);
    let n3 = parseFloat(document.getElementById("nota3").value);

    let promedio = (n1 + n2 + n3) / 3;

    document.getElementById("resultadoPromedio").innerText =
        "Promedio: " + promedio.toFixed(2);
}

function iniciarCuenta() {
    let num = 10;

    let intervalo = setInterval(() => {
        document.getElementById("cuenta").innerText = num;
        num--;

        if (num < 0) clearInterval(intervalo);
    }, 1000);
}

function mostrarFecha() {
    let fecha = new Date();
    document.getElementById("fecha").innerText =
        fecha.toDateString();
}