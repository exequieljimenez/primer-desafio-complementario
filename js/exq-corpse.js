alert("Hola. Este programa simula una versión unipersonal de un cadaver exquisito");

let jugarONo = prompt("¿Quiere comenzar? Escriba 'S' o 's' en caso afirmativo. Escriba cualquier otra cosa para salir")

if (jugarONo.toUpperCase() == "S") {
    let palabra = prompt("Inserte una primera palabra. Para salir escriba 'ESC'");
    let frase = "";

    while (palabra != "ESC") {
        frase = frase + palabra + " ";
        console.log(frase);
        palabra = prompt("Agregue una nueva palabra. Para salir y/o terminar la frase escriba 'ESC'");
    }
    
    if(frase == "") {
        alert("Su frase no contiene ninguna palabra")
    }

    else {
        alert(`La frase completa es: ${frase}`);
    }
}
else {
    alert("Hasta luego")
}