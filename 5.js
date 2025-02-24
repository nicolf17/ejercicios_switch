function pedirNota(materia) {
    let pedirNota
    do {
        nota = Number(prompt(`Ingrese su calificacion de ${materia} (0-10): `))
    } while (isNaN(nota) || nota < 0 || nota > 10)
    return nota
}

let fisica = pedirNota("fisica")
let quimica = pedirNota("quimica")
let biologia = pedirNota("biologia")
let matematicas = pedirNota("matematicas")
let informatica = pedirNota("inofrmatica")

let calificacion
let porcentaje = ((fisica + quimica + biologia + matematicas + informatica) / 50) * 100

switch (true) {
    case (porcentaje > 80):
        calificacion = ("excelente")
        mensaje = (`Tu porcentaje es del ${porcentaje}% y tu calificacion es ${calificacion}`)
        break
    case (porcentaje > 60):
        calificacion = ("buena")
        mensaje = (`Tu porcentaje es del ${porcentaje}% y tu calificacion es ${calificacion}`)
        break
    case (porcentaje > 0 && porcentaje < 60):
        calificacion = ("mala")
        mensaje = (`Tu porcentaje es del ${porcentaje}% y tu calificacion es ${calificacion}`)
        break
    default:
        calificacion = ("Invalido")
        mensaje = (`Tu porcentaje es del ${porcentaje}% y tu calificacion es ${calificacion}`)
}

alert(mensaje)

