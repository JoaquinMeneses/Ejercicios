console.log( beers )

/* 
1-Generar una función que reciba como parámetro el array de cervezas y un valor de alcohol.
  La función debe devolver un nuevo array con las cervezas que no excedan el nivel etílico. 
  Cada elemento del nuevo array debe ser un objeto que tenga la propiedades 
  nombre, alcohol (abv) y "amargor" (ibu)
*/
function filtroCervezas( arrayCervezas, alcohol ){
    const cervezas = arrayCervezas.filter( cerveza => cerveza.abv <= alcohol )
    const cervezasNuevosObjetos = cervezas.map( cerveza => {
        let aux = {
            nombre : cerveza.name,
            alcohol : cerveza.abv,
            amargor : cerveza.ibu
        }
        return aux
    } )
    return cervezasNuevosObjetos
}

const menosDeSeis = filtroCervezas( beers, 6 ) 

/* 
2-  Generar una función que reciba como parámetro un array de cervezas y 
    devuelva un nuevo array con las 10 cervezas más alcohólicas
*/

function masAlcoholicas( cervezas ){
    const cervezasOrdenadas = cervezas.filter( cerveza => cerveza.abv )
                                      .sort( (a,b) => b.abv - a.abv )
                                      .slice(0,10)
    return cervezasOrdenadas
}
const cervezasMasAlcoholicas = masAlcoholicas( beers ) 
/* 
3-  Generar una función que reciba como parámetro un array de cervezas y 
    devuelva un nuevo array con las 10 cervezas menos amargas
*/

function menosAmargas( cervezas ){
    const cervezasOrdenadas = cervezas.filter( cerveza => cerveza.ibu )
                                      .sort( (a,b) => a.ibu - b.ibu )
                                      .slice(0,10)
    return cervezasOrdenadas
}
const cervezasMasAmargas = menosAmargas(beers) 
/* 
4-  Generar una función que reciba como parámetro un array de cervezas, 
    un nombre de propiedad y un valor booleano. Debe devolver un nuevo array con 10 
    cervezas ordenadas por la propiedad ingresada como segundo argumento, 
    de manera ascendente si el tercero es true o descendente si es false
*/

function ordenarCervezas( cervezas, propiedad, bool ){
    const checkearPropiedad = cervezas.filter( cerveza => cerveza[propiedad] )
                                .sort( (a,b) => {
                                    if(bool){
                                        if( a[propiedad] > b[propiedad] ) return 1
                                        if( a[propiedad] < b[propiedad] ) return -1
                                        return 0
                                    }else{
                                        if( a[propiedad] < b[propiedad] ) return 1
                                        if( a[propiedad] > b[propiedad] ) return -1
                                        return 0
                                    }                                                      
                                } ).slice( 0, 10)
    return checkearPropiedad
}
console.log( ordenarCervezas( beers, 'ibu', false ) )
/* 
    5-  Generar una función que reciba como parámetro un array de cervezas y un id. 
    La función debe renderizar (renderear, dibujar, pintar, llenar, etc) 
    en un  archivo html una tabla que contenga las columnas "Name", "ABV", "IBU", 
    y una fila por cada elemento del array. 
    Cada fila debe tener los datos que se piden de cada una de las cervezas.
*/

function llenarTabla( cervezas, id ){
    const elemento = document.getElementById( id )
   /*  const template = cervezas.reduce( (acc, act) => {
        return acc + ` <tr>
                            <td>${act.name}</td>
                            <td>${act.abv}</td>
                            <td>${act.ibu}</td>
                        </tr> 
    `
    },'' ) */
    /* const template = cervezas.map( cerveza => {
        return ` <tr>
        <td>${cerveza.name}</td>
        <td>${cerveza.abv}</td>
        <td>${cerveza.ibu}</td>
    </tr> 
`
    } ) */
    let template = ''
    cervezas.forEach( cerveza => {
        template += ` <tr>
        <td>${cerveza.name}</td>
        <td>${cerveza.abv}</td>
        <td>${cerveza.ibu}</td>
    </tr> 
`
    } )
    elemento.innerHTML = template
} 

llenarTabla( cervezasMasAmargas, 'tbody' )