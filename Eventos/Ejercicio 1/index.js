function calcularIMC(peso, estatura) {
    const imc = peso / (estatura ** 2);
    return imc;
}

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const estatura = parseFloat(document.getElementById("estatura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const imc = calcularIMC(peso, estatura);
    document.getElementById("resultado").value = imc.toFixed(2);
});