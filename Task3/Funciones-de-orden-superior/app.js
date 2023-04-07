const cervezas = data;

// 1-  Generar una función que reciba como parámetro el array de cervezas y un valor de alcohol. La función debe devolver un nuevo array con las cervezas que no excedan el nivel etílico. Cada elemento del nuevo array debe ser un objeto que tenga la propiedades nombre, alcohol (abv) y "amargor" (ibu)

let nivelAlcohol = 70; // Ajustar el nivel etilico
function filtrarCervezasPorAlcohol(cervezas, nivelAlcohol) {
return cervezas
    .filter((cerveza) => cerveza.abv <= nivelAlcohol)
    .sort((cervezaA, cervezaB) => cervezaA.abv - cervezaB.abv)
    .map((cerveza) => ({
        Nombre: cerveza.name,
        Alcohol: `${cerveza.abv}%`,
        Amargor: `${cerveza.ibu}%`,
    }));
}

// 2-  Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo array con las 10 cervezas más alcohólicas

function filtrarCervezasMasAlcoholicas(cervezas) {
const cervezasMasAlcoholicas = cervezas.sort((cervezaA, cervezaB) => cervezaB.abv - cervezaA.abv);
    return cervezasMasAlcoholicas.slice(0, 10).map((cerveza) => ({
        Nombre: cerveza.name,
        Alcohol: `${cerveza.abv}%`,
    }));
}

// 3-  Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo array con las 10 cervezas menos amargas

function filtrarCervezasMenosAmargas(cervezas) {
const cervezasMenosAmargas = cervezas.sort((cervezaA, cervezaB) => cervezaA.ibu - cervezaB.ibu);
    return cervezasMenosAmargas.slice(0, 10).map((cerveza) => ({
        Nombre: cerveza.name,
        Amargor: `${cerveza.ibu}%`,
    }));
}

// 4-  Generar una función que reciba como parámetro un array de cervezas, un nombre de propiedad y un valor booleano. Debe devolver un nuevo array con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento, de manera ascendente si el tercero es true o descendente si es false

function ordenarCervezas(cervezas, propiedad, ascendente) {
    return cervezas
        .sort((cervezaA, cervezaB) => {
        if (ascendente) {
            return cervezaA[propiedad] - cervezaB[propiedad];
        } else {
            return cervezaB[propiedad] - cervezaA[propiedad];
        }
    })
    .slice(0, 10);
}

// 5-  Generar una función que reciba como parámetro un array de cervezas y un id. La función debe renderizar (renderear, dibujar, pintar, llenar, etc) en un  archivo html una tabla que contenga las columnas "Name", "ABV", "IBU", y una fila por cada elemento del array. Cada fila debe tener los datos que se piden  de cada una de las cervezas.

function renderizarTablaCervezas(cervezas, contenedorTablaId) {
    const contenedorTabla = document.getElementById(contenedorTablaId);
    const tabla = document.createElement("table");
    const cuerpo = 
        `<table>
            <thead class="bg-success">
                <th class="borders">Name</th>
                <th class="borders text-center">ABV</th>
                <th class="borders text-center">IBU</th>
            </thead>
            <tbody class="bg-light">
                ${cervezas.map((cerveza) => 
                    `<tr>
                        <td class="borders">${cerveza.name}</td>
                        <td class="borders text-center">${cerveza.abv}</td>
                        <td class="borders text-center">${cerveza.ibu}</td>
                    </tr>
                    `
                )
                .join("")}
            </tbody>
        </table>`;

    tabla.innerHTML += cuerpo;

    contenedorTabla.appendChild(tabla);
}

renderizarTablaCervezas(cervezas, "table");