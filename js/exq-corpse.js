alert("Hola. Este programa simula una versión unipersonal de un cadáver exquisito");

let jugarONo = prompt("¿Quiere comenzar? Escriba 'S' o 's' en caso afirmativo. Escriba cualquier otra cosa para salir")

// Condicional para entra al juego o no.
if (jugarONo.toUpperCase() == "S") {

    // Definición de las variables. La variable palabra irá pidiendo strings al usuario. La variable frase, vacía aún, es donde luego irán concatenándose.
    let palabra = prompt("Inserte una primera palabra. Para salir escriba 'ESC'");
    let frase = "";

    // Se van agregando las palabras a la frase. En la consola va quedando la frase a medida que se va concantenando.
    while (palabra != "ESC") {
        frase = frase + palabra + " ";
        console.log(frase);
        palabra = prompt("Agregue una nueva palabra. Para salir y/o terminar la frase escriba 'ESC'");
    }
    
    // Esto aparece si la frase termina vacía
    if(frase == "") {
        alert("Su frase no contiene ninguna palabra")
    }

    // Si bien la frase queda registrada en la consola en cada vuelta del bucle, un alert muestra la versión completa.
    else {
        alert(`La frase completa es: ${frase}`);
    }
}
else {
    alert("Hasta luego")
}