/* 1. Realizar un programa que dado 2 numeros imprima por consola si el primer numero es
mayor que el segundo. */

function mayorNumero(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} es el numero mayor`);
    }else {
        console.log(`${num2} es el numero mayor`);
    }
}

/* 2. Realizar un programa que dado 2 numeros imprima por consola si los numeros son
iguales o si son diferentes. */

function compararNumeros(num1, num2) {
    if (num1 === num2) {
        console.log("Los numeros son iguales");
    } else {
        console.log("Los numeros son diferentes");
    }
}

/* 3. Realizar un programa que dado 2 numeros imprima por consola cual de los 2 numeros
es el mas grande o si son iguales. */

function masGrande(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} es mas grande que ${num2}`);
    }else if (num1 < num2) {
        console.log(`${num2} es mas grande que ${num1}`);
    }
    else {
        console.log("Los numeros son iguales")
    }
}

/* 4. Realizar un programa que dado 3 numeros imprima por pantalla cual de los 3 es el mas
chico. */

function masChico(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        console.log(`${num1} es el numero mas chico`);
    }else if (num2 < num1 && num2 < num3) {
        console.log(`${num2} es el numero mas chico`);
    }else {
        console.log(`${num3} es el numero mas chico`);
    }
}

/* 5. Realizar un programa que dado 2 objetos representando personas con las propiedades
nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual
es la de mayor edad. */

function personas(){
    let persona1 = {
        nombre: 'Joaquin',
        edad: 21,
        altura: 1.75
    };
    let persona2 = {
        nombre: 'Maria',
        edad: 23,
        altura: 1.70
    };
    
    if (persona1.altura > persona2.altura) {
        console.log(`${persona1.nombre} es más alto/a que ${persona2.nombre}`);
    } else if (persona1.altura < persona2.altura) {
        console.log(`${persona2.nombre} es más alto/a que ${persona1.nombre}`);
    } else {
        console.log(`${persona1.nombre} y ${persona2.nombre} tienen la misma altura`);
    }
    if (persona1.edad > persona2.edad) {
        console.log(`${persona1.nombre} es mayor que ${persona2.nombre}`);
    } else if (persona1.edad < persona2.edad) {
        console.log(`${persona2.nombre} es mayor que ${persona1.nombre}`);
    } else {
        console.log(`${persona1.nombre} y ${persona2.nombre} tienen la misma edad`);
    }
}


/* 6. Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión
y permita determinar si estas capacitado para conducir. La persona deberá cumplir con
una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como
mínimo. */

function licencia(){
    let nombre = prompt('Ingrese su nombre:');
    let edad = prompt('Ingrese su edad:');
    let altura = prompt('Ingrese su altura en cm:');
    let vision = prompt('Ingrese su visión en un rango de 0 a 10):');

    if (edad >= 18 && altura > 150 && vision >= 8) {
        console.log(`${nombre} estás capacitado/a para conducir`);
    } else {
        console.log(`${nombre} no estás capacitado/a para conducir`);
    }
}

/* 7. Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip
o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu
mismo nombre tienen ingreso libre así como también los que posean un pase vip,
mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en
caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el
mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso
afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta
de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en
caso contrario a no querer comprar, mostrar mensaje de despedida. */

function ingreso(){
    let nombre = prompt("Ingrese su nombre:");
    if (nombre === "Joaquin") {
        alert("¡Bienvenido!");
    } else {
        let pase = prompt("Ingrese su tipo de pase (vip o normal):");
        if (pase === "vip") {
            alert("Tienes pase vip ¡Bienvenido!");
        } else {
            let entrada = prompt("¿Tienes una entrada? (si/no)");
            if (entrada === "si") {
                let usarEntrada = prompt("¿Deseas utilizar la entrada?(si/no)");
                if (usarEntrada === "si") {
                    alert("Tienes pase normal ¡Bienvenido!");
                } else {
                    alert("Gracias, vuelva pronto");
                }
            } else {
                let comprar = prompt("¿Deseas comprar una entrada? (si/no)");
                if (comprar === "si") {
                    let dinero = prompt("¿Cuánto dinero tienes disponible?");
                    if (dinero >= 1000) {
                        alert("Venta de entrada realizada ¡Bienvenido!");
                    } else {
                        alert("No tienes suficiente dinero para comprar una entrada");
                    }
                } else {
                    alert("Gracias, vuelva pronto");
                }
            }
        }
    }
}

/* 8. Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable
llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario
deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá
guardar en una variable llamada numeroIngresado, y en cada intento deberás
mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a
intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de
adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si
usas mucho código repetido, mas adelante veraz como realizar este juego de manera
mas eficiente. */

function adivinanza(){
    let numeroIncognita = Math.ceil(Math.random() * 10);
    let intentos = 3;
    let numeroIngresado = prompt("Ingresa un numero del 1 al 10:");
    if (numeroIngresado == numeroIncognita) {
        alert("Ganaste, adivinaste el numero.");
    } else if (numeroIngresado < numeroIncognita) {
        alert("El numero que ingresaste es menor a la incognita, proba con otro numero");
        intentos--;
        numeroIngresado = prompt("Intenta otra vez, te quedan " + intentos + " intentos:");
        if (numeroIngresado == numeroIncognita) {
            alert("Ganaste, adivinaste el numero.");
    } else if (numeroIngresado < numeroIncognita) {
        alert("El numero que ingresaste es menor a la incognita, proba con otro numero");
        intentos--;
        numeroIngresado = prompt("Intenta otra vez, te queda " + intentos + " intento:");
        if (numeroIngresado == numeroIncognita) {
            alert("Ganaste, adivinaste el numero.");
        } else {
            alert("Perdiste, el numero era " + numeroIncognita);
        }
    } else {
        alert("El numero que ingresaste es mayor a la incognita, proba con otro numero");
        intentos--;
        numeroIngresado = prompt("Intenta otra vez, te queda " + intentos + " intento:");
        if (numeroIngresado == numeroIncognita) {
            alert("Ganaste, adivinaste el numero.");
        } else {
            alert("Perdiste, el numero era " + numeroIncognita);
        }
    }
    } else {
        alert("El numero que ingresaste es mayor a la incognita, proba con otro numero");
        intentos--;
        numeroIngresado = prompt("Intenta otra vez, te quedan " + intentos + " intentos:");
    if (numeroIngresado == numeroIncognita) {
        alert("Ganaste, adivinaste el numero.");
    } else if (numeroIngresado < numeroIncognita) {
        alert("El numero que ingresaste es menor a la incognita, proba con otro numero");
        intentos--;
        numeroIngresado = prompt("Intenta otra vez, te queda " + intentos + " intento:");
        if (numeroIngresado == numeroIncognita) {
            alert("Ganaste, adivinaste el numero.");
        } else {
            alert("Perdiste, el numero era " + numeroIncognita);
        }
    } else {
        alert("El numero que ingresaste es mayor a la incognita, proba con otro numero");
        intentos--;
        numeroIngresado = prompt("Intenta otra vez, te queda " + intentos + " intento:");
        if (numeroIngresado == numeroIncognita) {
            alert("Ganaste, adivinaste el numero.");
        } else {
            alert("Perdiste, el numero era " + numeroIncognita);
        }
    }
    }
}

/* 9. Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12
años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de
45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje
preguntando si en realidad tiene esa edad */

function pruebaEdad() {
    let edad = prompt('Ingrese su edad:');
    if (edad > 100) {
        alert (`¿Usted tiene en realidad ${edad} años?`)
    }
    else if (edad >= 0 && edad <= 12) {
        alert ("Usted es un infante");
    } else if (edad >= 13 && edad <= 18) {
        alert ("Usted es un adolescente");
    } else if (edad >= 19 && edad <= 45) {
        alert ("Usted es un mayor joven");
    } else {
        alert ("Usted es un anciano");
    }
}

/* 10. Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2
jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de
algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho
trampa */

function juego() {
    let jugador1 = prompt("Ingrese el nombre del primer jugador");
    let jugador2 = prompt("Ingrese el nombre del segundo jugador");
    let eleccionJugador1 = prompt(`${jugador1}: elige PIEDRA, PAPEL o TIJERAS`);
    let eleccionJugador2 = prompt(`${jugador2}: elige PIEDRA, PAPEL o TIJERAS`);
    if 
        ((eleccionJugador1 === "PIEDRA" && eleccionJugador2 === "TIJERAS") || (eleccionJugador1 === "PAPEL" && eleccionJugador2 === "PIEDRA") || (eleccionJugador1 === "TIJERAS" && eleccionJugador2 === "PAPEL")) 
    {
        alert(`${eleccionJugador1} gana a ${eleccionJugador2} por lo tanto gana el jugador ${jugador1}`);
    } else if 
        ((eleccionJugador2 === "PIEDRA" && eleccionJugador1 === "TIJERAS") || (eleccionJugador2 === "PAPEL" && eleccionJugador1 === "PIEDRA") || (eleccionJugador2 === "TIJERAS" && eleccionJugador1 === "PAPEL")) 
    {
        alert(`${eleccionJugador2} gana a ${eleccionJugador1} por lo tanto gana el jugador ${jugador2}`);
    } else if (eleccionJugador1 === eleccionJugador2) {
        alert("Hay empate");
    } else {
        alert("Uno de los jugadores hizo trampa");
    }
}

/* 11. Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar
por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color,
Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo:
El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente
elección, no lo teníamos pensado. */

function ingresoColor(){
    let color = prompt("Ingrese un color:");
    switch (color){
        case "Blanco": case "Negro":
            alert("Falta de color");
        break;
        case "Verde":
            alert("El color de la naturaleza");
        break;
        case "Azul":
            alert("El color del agua");
        break;
        case "Amarillo":
            alert("El color del sol");
        break;
        case "Rojo":
            alert("El color del fuego");
        break;
        case "Marron":
            alert("El color de la tierra");
        break;
        default :
            alert("Excelente eleccion, no lo teniamos pensado");
        break;
    }
}

/* 12.Realizar un programa que permita el ingreso de 2 valores numéricos y una operación.
Según sea la operación ingresada (suma, resta, multiplicación, división) el programa
deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber
elegido división realizar la operación siempre que sea posible o mostrar un mensaje de
ERROR si el divisor ingresado fue 0. */

function programaMatematico() {
    let operacion = prompt("Ingrese la operación que desea realizar:");
    let numero1 = parseInt(prompt("Ingrese el primer valor numerico"));
    let numero2 = parseInt(prompt("Ingrese el segundo valor numerico"));
    let resultado = 0;
    if (operacion !== "suma" && operacion !== "resta" && operacion !== "multiplicacion" && operacion !== "division") {
        alert("Operacion no valida");
    } else if (operacion === "suma") {
        resultado = numero1 + numero2;
        alert(`${numero1} + ${numero2} = ${resultado}`)
    } else if (operacion === "resta") {
        resultado = numero1 - numero2;
        alert(`${numero1} - ${numero2} = ${resultado}`)
    } else if (operacion === "multiplicacion") {
        resultado = numero1 * numero2;
        alert(`${numero1} * ${numero2} = ${resultado}`)
    } else if (operacion === "division") {
        if (numero2 === 0) {
            alert("El divisor no puede ser 0")
        } else {
            resultado = numero1 / numero2;
            alert(`${numero1} / ${numero2} = ${resultado}`);
        }
    }
}

/* 13. Crear un programa que permita ingresar todos los datos de tu dni nacional de
identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y
pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni
con todos los datos ingresados y mostrarlos por consola con console.table() mas un
mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos,
mostrar un mensaje que diga: vuelva a intentarlo en 1 mes. */

function ingresoDatos() {
    let dni = {}
    dni.nombre = prompt("Ingresa su nombre completo:");
    dni.numeroDNI = prompt("Ingresa su número de identificación:");
    dni.nacimiento = prompt("Ingresa su fecha de nacimiento (DD/MM/AAAA):");
    alert("Los datos ingresados son los siguientes:");
    alert(`Nombre: ${dni.nombre} \nDNI: ${dni.numeroDNI} \nFecha de nacimiento: ${dni.nacimiento}`);
    let confirmacion = prompt("¿Los datos son correctos? (si/no)")
    if (confirmacion == "si"){
        alert("Registro exitoso");
        console.table(dni);
    }else {
        alert("Vuelva a intentarlo en 1 mes")
}
}