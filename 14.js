let tamaño = prompt("¿Desea un sándwich pequeño o grande?").toLowerCase();
let costoBase;

switch (tamaño) {
    case "pequeño":
        costoBase = 6000;
        break;
    case "grande":
        costoBase = 12000;
        break;
    default:
        alert("Tamaño no válido.");
        costoBase = 0;
}

if (costoBase > 0) {
    let total = costoBase;

    let precioTocineta = 3000;
    let precioJalapeño = 0;
    let precioPavo = 3000;
    let precioQueso = 2500;

    let agregarTopping;
    do {
        agregarTopping = prompt("¿Desea agregar un topping? (tocineta/jalapeño/pavo/queso/no)").toLowerCase();
        switch (agregarTopping) {
            case "tocineta":
                total += precioTocineta;
                break;
            case "jalapeño":
                total += precioJalapeño;
                break;
            case "pavo":
                total += precioPavo;
                break;
            case "queso":
                total += precioQueso;
                break;
            case "no":
                break;
            default:
                alert("Topping no válido.");
        }
    } while (agregarTopping !== "no");

    let n = total.toLocaleString("es-ES");
    alert(`El total a pagar por su sándwich es: $${n} pesos`);
}
