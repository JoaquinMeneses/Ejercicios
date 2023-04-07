/* N°1 | Realizar un programa que permita el ingreso de un número y muestre su tabla de
multiplicar (Los primeros 10 múltiplos). */

function programa1(){
    let numero = parseInt(prompt("Ingresa un número para mostrar su tabla de multiplicar"));
    let programa = document.getElementById("programa");
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        programa.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;
    }
}

/* N°2 | Realizar un programa que permita el ingreso de números los cuales se tienen que ir
acumulando. El ingreso de datos terminará cuando el usuario ingrese un valor 0. */

function programa2() {
    let numero;
    let resultado = 0;
    while (numero !== 0) {
        numero = parseInt(prompt("Ingresa un número"));
        resultado += numero;
    }
    alert(`El valor acumulado es: ${resultado}`);
}

/* N°3 | Realizar en juego de adivinar el número de los ejercicios del tema anterior, en una
variable guardar un número que esté en el rango 1 - 100. La persona deberá poder ingresar
números hasta adivinar el valor que se encuentre en dicha variable. Si el valor es menor al
número secreto, avisarle al usuario lo sucedido y pedirle nuevamente el ingreso de otro
número, realizar la misma acción pero en lugar de cuando es menor, si es que el número
ingresado es mayor. Así sucesivamente hasta que el usuario adivine el número secreto. Por
último mostrar un mensaje de felicitaciones y decirle en cuantos intentos lo ha realizado.  */

function programa3() {
    const numeroSecreto = Math.ceil(Math.random() * 100); // se puede usar Math.floor(Math.random() * 100) + 1
    let intentos = 0;
    let numeroIngresado = 0;
    while (numeroIngresado !== numeroSecreto) {
        numeroIngresado = parseInt(prompt("Ingresa un numero del 1 al 100"));
        if (numeroIngresado < numeroSecreto) {
        alert("El numero ingresado es menor al numero secreto");
        } else if (numeroIngresado > numeroSecreto) {
            alert("El numero ingresado es mayor al numero secreto");
        }
        intentos++;
    }
    alert(`Adivinaste el numero secreto (${numeroSecreto}) en ${intentos} intentos`)
}

/* N°4 | Realizar un programa que permita decir si un número es primo. Un número es primo si solo es divisible
por el valor 1 y por sí mismo. Ayuda: Usar la operación de módulo. Los números solo poseen divisores hasta la
mitad del valor del mismo. Ej: 50 tiene como divisores 1, 2, 5, 10 y 25. No es primo. Con tener más de 2
divisores el número ya no es primo. */

function programa4() {
    let numero = parseInt(prompt("Ingresa un número para saber si es primo o no"));
    if (numero <= 1) {
        alert(`El número no es primo`);
        return;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            alert(`El número no es primo`);
            return;
        }
    }
    alert(`El número es primo`);
}

/* N°5 | Realizar un programa que permita dado un numero, mostrar todos sus divisores. */

function programa5() {
    let numero = parseInt(prompt("Ingresa un número para mostrar sus divisores"));
    let divisores = "";
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
        divisores += i + " ";
        }
    }
    alert(`Los divisores de ${numero} son: ${divisores}`);
}

/* N°6 | Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre un mensaje por
consola con cada uno de los elementos del array. */

function programa6() {
    const array = ['elemento 1', 'elemento 2', 'elemento 3', 'elemento 4', 'elemento 5', 'elemento 6', 'elemento 7', 'elemento 8', 'elemento 9', 'elemento 10'];
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

/* N°7 | Dado un array de 10 números, realizar un programa que muestre por consola el doble de cada uno de
los elementos. */

/* N°8 | Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada objeto representa a 1
persona con al menos 4 propiedades, realizar un programa que muestre un mensaje de presentación por
cada elemento del array. */

/* N°9 | Dado un array de 10 números, realizar un programa que recorra el array y solo muestre los números
impares. */

/* N°10 | Realizar un programa que permita la entrada de números y calcule la suma de los números pares por
un lado y los impares por otro, el ingreso de dato finaliza cuando el usuario ingresa un 0. */

/* N°11 | Dado un array de 10 números, realizar un programa que imprima por pantalla el número más grande. */

/* N°12 | Dado un array de 10 números, realizar un programa que imprima por pantalla el número más chico. */

/* N°13 | Realizar un programa que permita jugar a piedra papel o tijeras, se deberá poder ingresar los nombres
de 2 jugadores. En el bucle del juego se deberá pedir 1 a 1 las manos de cada jugador, y en cada turno se
deberá seguir jugando solo si se produjo un empate. Caso contrario mostrar un mensaje con el nombre de la
persona ganadora. */

/* N°14 | Realizar un programa que imprima por consola un triángulo de 5 asteriscos de lado. */

/* N°15 | Realizar un programa que imprima por consola un triángulo de 5 asteriscos de lado pero invertido. */

/* N°16 | Dado un array de 10 números desordenados, realizar un programa que imprima por pantalla el array
ordenado. (NO USAR SORT, solo ciclos FOR) */