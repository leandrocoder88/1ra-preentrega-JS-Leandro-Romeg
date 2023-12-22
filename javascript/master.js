// AL EJECUTAR DEVTOOLS, ESCRIBIR EN LA CONSOLA JS LA FUNCION: cuantoDeboBeber()

const consumoDeAguaPorKilo = 0.035

function calcularCantidadDebeBeber(pesoPersona, dias) {
    let cuantoDebeBeberPorDia = pesoPersona * consumoDeAguaPorKilo
    
    let totalDeLitros = pesoPersona * consumoDeAguaPorKilo * dias
    
    for (let i = 1; i <= dias; i++) {
        console.log("Usted debe beber en el dia " + i + ": " + cuantoDebeBeberPorDia.toFixed(3) + " Litros")
    }
    
    console.log("🚰🥤La cantidad total de agua que debe beber en " + dias + " días es: " + totalDeLitros.toFixed(3) + " Litros🚰🥤");
}

function cuantoDeboBeber() {
    let pesoDeLaPersona = prompt("👩‍⚕️Ingrese su peso exacto,para obtener un resultado óptimo👨‍⚕️: ")
    
    let porDia = prompt("📆Ingrese la cantidad de dias que va a beber agua con nuestro programa📆: ")

    if ((pesoDeLaPersona !== "" && pesoDeLaPersona !== null) && (parseInt(porDia) >= 1 && parseFloat(pesoDeLaPersona) >= 4)){calcularCantidadDebeBeber(parseFloat(pesoDeLaPersona), parseInt(porDia))
    } 
    else {
    
        console.warn("🚨🚨Ingresa un peso válido y/o la cantidad de días correctos🚨🚨")}
}
