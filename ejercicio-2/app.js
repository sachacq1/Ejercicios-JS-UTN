

const $respuesta = document.querySelector("p");
const $form = document.getElementById("score-form");


$form.addEventListener("submit", (e) => {
    e.preventDefault();
    const $nombre = document.getElementById("name");
    const $puntuacion = document.getElementById("score");

    if ($puntuacion.value >= 90) {
        console.log(`${$nombre.value} tu calificaion es A`)
        $respuesta.innerHTML = (`${$nombre.value} tu calificaion es A`)

    }
    else if ($puntuacion.value >= 80 && $puntuacion.value <= 89) {
        $respuesta.innerHTML = (`${$nombre.value} tu calificaion es B`)
        console.log(`${$nombre.value} tu calificaion es B`)
    }

    else if ($puntuacion.value >= 70 && $puntuacion.value <= 79) {
        $respuesta.innerHTML = (`${$nombre.value} tu calificaion es C`)
        console.log(`${$nombre.value} tu calificaion es C`)
    }

    else if ($puntuacion.value >= 60 && $puntuacion.value <= 69) {
        $respuesta.innerHTML = (`${$nombre.value} tu calificaion es D`)
        console.log(`${$nombre.value} tu calificaion es D`)
    }

    else if ($puntuacion.value >= 50 && $puntuacion.value <= 59) {
        $respuesta.innerHTML = (`${$nombre.value} tu calificaion es E`)
        console.log(`${$nombre.value} tu calificaion es E`)
    }

    else if ($puntuacion.value <= 59) {
        $respuesta.innerHTML = (`${$nombre.value} tu calificaion es F`)
        console.log(`${$nombre.value} tu calificaion es F`)
    }

});

$form.reset();