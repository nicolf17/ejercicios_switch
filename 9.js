let angulo1, angulo2, angulo3;

do {
    angulo1 = Number(prompt("Ingrese el primer ángulo del triángulo:"));
} while (isNaN(angulo1) || angulo1 <= 0);

do {
    angulo2 = Number(prompt("Ingrese el segundo ángulo del triángulo:"));
} while (isNaN(angulo2) || angulo2 <= 0);

do {
    angulo3 = Number(prompt("Ingrese el tercer ángulo del triángulo:"));
} while (isNaN(angulo3) || angulo3 <= 0);

switch (true) {
    case (angulo1 + angulo2 + angulo3 === 180):
        alert("El triángulo es válido.");
        break;
    default:
        alert("El triángulo NO es válido.");
}
