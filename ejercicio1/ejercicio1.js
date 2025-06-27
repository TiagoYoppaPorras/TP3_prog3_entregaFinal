const valor1 = document.getElementById("numero1");
const valor2 = document.getElementById("numero2");
const operacion = document.getElementById("operacion");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
const formulario = document.getElementById("formulario");

function verificarDivision() {
    if (operacion.value === "division" && parseFloat(valor2.value) === 0) {
        calcular.disabled = true;
    } else {
        calcular.disabled = false;
    }
}

operacion.addEventListener("change", verificarDivision);
valor2.addEventListener("input", verificarDivision);

formulario.addEventListener("submit", (event) => {
    event.preventDefault();



    const num1 = parseFloat(valor1.value);
    const num2 = parseFloat(valor2.value);
    let res;

    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = "Ingrese números válidos";
        return;
    }

    switch (operacion.value) {
        case "suma":
            res = num1 + num2;
            break;
        case "resta":
            res = num1 - num2;
            break;
        case "multiplicacion":
            res = num1 * num2;
            break;
        case "division":
            if (num2 !== 0) {
                res = num1 / num2;
            } else {
                res = "Error: División por cero";
            }
            break;
        default:
            res = "Operación no válida";
    }

    resultado.textContent = `Resultado: ${res}`;

   
    valor1.value = "";
    valor2.value = "";
    calcular.disabled = false; 
});