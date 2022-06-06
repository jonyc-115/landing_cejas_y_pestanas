window.onload = inicio;
let video = "v-cejas.mp4"

const $vid = document.querySelector("video"),
    $cambio = document.getElementById("play_a_pause"),
    $volumen = document.querySelector(".volumen"),
    $estado = document.querySelector(".estado")



//funcion de inicio donde se carga todo el codigo
function inicio() {
    $vid.src = `media/${video}`;
    document.querySelector(".play").onclick = play;
    document.querySelector(".volumen").onclick = volumen;
    document.querySelector(".reinicio").onclick = reinicio;
    document.querySelector(".expandir").onclick = expandir;
    $vid.ontimeupdate = actualizar;
}



//Inicio y pausa del video
function play() {
    if ($vid.paused) {
        $vid.play()
        $cambio.innerHTML = '<i class="fa-solid fa-pause"></i>'
    }
    else {
        $vid.pause()
        $cambio.innerHTML = '<i class="fa-solid fa-play"></i>'
    }
}

//Volumen del video
const volumen = () => {
    $vid.volume = !$vid.volume
    let low = '<i class="fa-solid fa-volume-low"></i>',
        medium = '<i class="fa-solid fa-volume"></i>',
        heigth = '<i class="fa-solid fa-volume-high"></i>'

    if ($vid.volume == 0) {
        $volumen.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'
    }
    if ($vid.volume >= 0.75 && $vid.volume <= 1) {
        $volumen.innerHTML = heigth;
    }
    if ($vid.volume > 0.35 && $vid.volume < 0.75) {
        $volumen.innerHTML = medium;
    }
    if ($vid.volume > 0 && $vid.volume < 0.35) {
        $volumen.innerHTML = low
    }
}

//Tiempo del video  =>  currenTime
const reinicio = () => {
    $vid.currentTime = 0
}

//Expandir y reducir el tamaño del video
/*const expandir = () => {
    const $reproductor = document.getElementById("reproductor")
    if($reproductor.style.transform == "scale(0.5)"){
        $reproductor.style.transform == "scale(1)";
    }
}
*/








