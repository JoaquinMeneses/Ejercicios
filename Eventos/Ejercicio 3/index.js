const arrayNotas = [
    {
        id: 0,
        titulo: "sacar la basura",
        texto: "mi señora me va a retar si no lo hago",
        realizada: false
    },
    {
        id: 1,
        titulo: "ir al supermercado",
        texto: "comprar pan, leche y huevos",
        realizada: false
    },
    {
        id: 2,
        titulo: "llamar al doctor",
        texto: "pedir cita para la semana que viene",
        realizada: false
    }
]

// Variables

let $idGlobal = 2
const $contenedor = document.getElementById("notas")

pintarNotas(arrayNotas, $contenedor)

let botonGuardar = document.getElementById("guardar");
botonGuardar.addEventListener("click", (e) => {
    e.preventDefault()
    let titulo = document.getElementById("titulo").value;
    let texto = document.getElementById("texto").value;
    agregarNota(titulo, texto);
    pintarNotas(arrayNotas, $contenedor);
    /* console.log(arrayNotas); // comprobar que agrega el elemento */
});

let botonBorrar = document.getElementById("borrar");
botonBorrar.addEventListener("click", (e) => {
    e.preventDefault()
    document.getElementById("titulo").value = "";
    document.getElementById("texto").value = "";
});

const botonSwitch = document.getElementById("boton-switch");
botonSwitch.addEventListener("click", () => {
    let notasFiltradasPorEstado = filtrarPorEstado(arrayNotas)
    let notasFiltradasPorTexto = filtrarPorTexto(notasFiltradasPorEstado, $buscador.value)
    pintarNotas(notasFiltradasPorTexto, $contenedor)
});

const $buscador = document.getElementById("buscador");
$buscador.addEventListener("keyup", () => {
    let notasFiltradasPorEstado = filtrarPorEstado(arrayNotas)
    let notasFiltradasPorTexto = filtrarPorTexto(notasFiltradasPorEstado, $buscador.value)
    pintarNotas(notasFiltradasPorTexto, $contenedor)
});

// Funciones

function crearNotas(nota) {
    return `<div class="card m-3 col-10 col-md-3">
                <div class="card-body">
                    <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada? "checked": ""}>
                    <h5 class="card-title">${nota.titulo}</h5>
                    <p class="card-text">${nota.texto}</p>
                    <button type="button" class="btn btn-primary" onClick="borrarNota(${nota.id})">Borrar nota</button>
                </div>
            </div>`;
}

function agregarNota(titulo, texto) {
    const nuevaNota = {
        id: ++$idGlobal,
        titulo: titulo,
        texto: texto,
    }
    arrayNotas.push(nuevaNota);
}

function pintarNotas(notas,elemento) {
    if (notas.length == 0){
        elemento.innerHTML = '<p class="card-text text-white">No hay notas</p>';
    }else {
        const notasFiltradas = notas.map(crearNotas).join("");
        elemento.innerHTML = notasFiltradas;
    }
}

function borrarNota(id) {
    const notasBorradas = arrayNotas.filter(nota => nota.id !== id);
    arrayNotas.splice(0, arrayNotas.length, ...notasBorradas);
    pintarNotas(arrayNotas, $contenedor)
}

function marcarRealizada(id) {
    const nota = arrayNotas.find(nota => nota.id === id);
    nota.realizada = !nota.realizada;
    /* console.log(arrayNotas); // comprobar que cambia el estado de realizada */
}

function filtrarPorEstado(array) {
    if (botonSwitch.checked === false) {
        return arrayNotas
    }else {
        return array.filter(nota => nota.realizada === true);
    }
}

function filtrarPorTexto(array, texto) {
    if (!texto) {
        return array;
    }
    const textoLower = texto.toLowerCase();
    return array.filter(nota =>nota.titulo.toLowerCase().includes(textoLower) || nota.texto.toLowerCase().includes(textoLower));
}