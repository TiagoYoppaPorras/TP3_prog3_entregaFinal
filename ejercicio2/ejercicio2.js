const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];


function mostrarPalabras(lista) {
    const listaFrutas = document.getElementById("listado")
    listaFrutas.innerHTML="";
    lista.forEach(palabra => {
        const li = document.createElement("li");
        li.textContent = palabra ;
        listaFrutas.appendChild(li);
    });
}

function filtrarPalabras (event) {
    event.preventDefault();
    const input = document.getElementById("filtracion").value.trim().toLowerCase();
    const mensajeError = document.getElementById("mensaje");

    if(input === ""){
        mensajeError.textContent="ingrese una palabra por favor!!";
        return
    }
mensajeError.textContent="";

const palabrasFiltradas = palabras.filter(palabra => palabra.toLowerCase().includes(input));

document.getElementById("filtracion").value = "";

mostrarPalabras(palabrasFiltradas);
}

mostrarPalabras(palabras);
const formulario = document.getElementById("form")
formulario.addEventListener("submit", filtrarPalabras);