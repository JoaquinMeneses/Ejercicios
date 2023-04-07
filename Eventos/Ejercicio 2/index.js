function convertirDivisa(valor, tipoCambio) {
    return valor * tipoCambio;
}

const dolar = document.getElementById("dolar");
const peso = document.getElementById("peso");
const resultado = document.getElementById("resultado");

const tipoCambio = 210.70;

dolar.addEventListener("input", () => {
    const valorDolar = dolar.value;
    const valorConvertido = convertirDivisa(valorDolar, tipoCambio);
    peso.value = valorConvertido.toFixed(4);
    resultado.innerText = `${valorConvertido.toFixed(4)} ARS = ${valorDolar} USD`;
});

peso.addEventListener("input", () => {
    const valorPeso = peso.value;
    const valorConvertido = convertirDivisa(valorPeso, 1 / tipoCambio);
    dolar.value = valorConvertido.toFixed(4);
    resultado.innerText = `${valorConvertido.toFixed(4)} USD = ${valorPeso} ARS`;
});