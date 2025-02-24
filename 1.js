let nombre = prompt("Ingrese su nombre: ")
let horas
let salario
let salarioHorasExtra

do {
    horas = Number(prompt("Ingrese la cantidad de horas que trabajó esta semana:"))

    if (horas < 0) {
        mensaje= ("Las horas trabajadas no pueden ser negativas. Por favor, ingrese un valor válido.")
    }

} while (horas < 0)

salario = horas * 30000
salarioHorasExtra = horas * 33000

let salarioFormateado = salario.toLocaleString("es-ES");
let salarioHorasExtraFormateado = salarioHorasExtra.toLocaleString("es-ES");

switch (true) {
    case (horas > 10):
        mensaje= (`Señor/a ${nombre}, el número de horas es ${horas} y su salario es de: ${salarioHorasExtraFormateado} pesos`);
        break;

    case (horas > 0 && horas <= 10):
        mensaje= (`Señor/a ${nombre}, el número de horas es ${horas} y su salario es de: ${salarioFormateado} pesoss`);
        break;

    case (horas === 0):
        mensaje= ("Si no has trabajado, no hay sueldo");
        break;

    default:
        mensaje= ("Opción no válida");
        break;
}

mensaje= (mensaje);
console.log(mensaje);
document.write(mensaje);
