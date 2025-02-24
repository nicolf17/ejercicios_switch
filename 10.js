let copias;
do {
    copias = Number(prompt("Ingrese la cantidad de copias que desea imprimir:"));
} while (isNaN(copias) || copias < 0);

let precioPorCopia;

switch (true) {
    case (copias >= 0 && copias <= 499):
        precioPorCopia = 120;
        break;
    case (copias >= 500 && copias <= 749):
        precioPorCopia = 100;
        break;
    case (copias >= 750 && copias <= 999):
        precioPorCopia = 80;
        break;
    case (copias >= 1000):
        precioPorCopia = 50;
        break;
    default:
        alert("Número de copias no válido.");
}

let total = copias * precioPorCopia;
let n = total.toLocaleString("es-ES");
alert(`El precio por copia es $${precioPorCopia}. El costo total es: ${n} pesos`);
