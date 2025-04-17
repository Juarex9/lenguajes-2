const numero1 = parseFloat(prompt("Ingrese el primer numero: "));
const numero2 = parseFloat(prompt("Ingrese el segundo numero: "));
const operacion = prompt("Ingrese la operación deseada: +, -, *, /");

if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, ingrese números válidos.");
}

if (operacion === "+") {
    alert(`El resultado de ${numero1} + ${numero2} es: ${numero1 + numero2}`);
}
else if (operacion === "-") {
    alert(`El resultado de ${numero1} - ${numero2} es: ${numero1 - numero2}`);
} else if (operacion === "*") {
    alert(`El resultado de ${numero1} * ${numero2} es: ${numero1 * numero2}`);
} else if (operacion === "/") {
    if (numero2 !== 0) {
        alert(`El resultado de ${numero1} / ${numero2} es: ${numero1 / numero2}`);
    } else {
        alert("No se puede dividir entre cero.");
    }
} else {
    alert("Operación no válida.");
}
