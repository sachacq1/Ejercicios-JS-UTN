
const edadJoven = Number(prompt("¿Que edad tienes?"));

if (typeof edadJoven === "number" && !Number.isNaN(edadJoven)) {
    if (edadJoven >= 18 && edadJoven <= 100) {
        console.log("Puedes ingresar");

    } else {
        console.log("Debes tener entre 18 y 100 años");

    }
} else {
    console.error("debes ingresar numeros");


}
