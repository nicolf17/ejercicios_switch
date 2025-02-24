let modelo;
do {
    modelo = Number(prompt("Ingrese el número de modelo de su automóvil:"));
} while (isNaN(modelo) || modelo < 0);

switch (true) {
    case (modelo === 119 || modelo === 179 || (modelo >= 189 && modelo <= 195) || modelo === 221 || modelo === 780):
        alert("El automóvil está defectuoso, llevar a garantía.");
        break;
    default:
        alert("Su automóvil no está defectuoso.");
}
