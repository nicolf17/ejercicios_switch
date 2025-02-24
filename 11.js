let pitido;
do {
    pitido = prompt("¿La computadora emite un pitido al encender? (si/no)").toLowerCase();
} while (pitido !== "si" && pitido !== "no");

let discoGira;
do {
    discoGira = prompt("¿El disco duro gira? (si/no)").toLowerCase();
} while (discoGira !== "si" && discoGira !== "no");

switch (true) {
    case (pitido === "si" && discoGira === "si"):
        alert("Póngase en contacto con el técnico de apoyo.");
        break;
    case (pitido === "si" && discoGira === "no"):
        alert("Verificar contactos de la unidad.");
        break;
    case (pitido === "no" && discoGira === "no"):
        alert("Traiga la computadora para repararla en la central.");
        break;
    case (pitido === "no" && discoGira === "si"):
        alert("Compruebe las conexiones de altavoces.");
        break;
    default:
        alert("Responda con 'si' o 'no'.");
}
