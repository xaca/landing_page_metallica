let btn, frm, txt;//Variables
let sound, btn_play, btn_stop;

//https://res.cloudinary.com/dpwnji5mr/video/upload/v1691798381/landing/audio/metallica/dark-mystery-trailer-taking-our-time-131566_u7peto.mp3

//https://res.cloudinary.com/dpwnji5mr/video/upload/v1691798378/landing/audio/metallica/powerful-beat-121791_1_jnnqzk.mp3

//https://res.cloudinary.com/dpwnji5mr/video/upload/v1691798378/landing/audio/metallica/risk-136788_kaahlj.mp3

window.onload = ()=>{
  
  sound = new Howl({
    src: ['https://res.cloudinary.com/dpwnji5mr/video/upload/v1691798378/landing/audio/metallica/risk-136788_kaahlj.mp3']
  });
  
  btn_play = document.getElementById("btn_play");
  btn_stop = document.getElementById("btn_stop");
  btn = document.getElementById("btn_enviar");
  btn.addEventListener("click",enviar);//Acción de presion de botón
  btn_play.addEventListener("click",reproducir);//Acción de presion de botón play
  btn_stop.addEventListener("click",detener);//Acción de presion de botón stop
}

function reproducir(event){
  btn_play.classList.add("ocultar");
  btn_stop.classList.remove("ocultar");
  sound.play();
}

function detener(event){
  btn_play.classList.remove("ocultar");
  btn_stop.classList.add("ocultar");
  sound.pause();
}

function enviar(event){
  frm = document.getElementById("formulario");
    if(frm.checkValidity())
    {
      txt = document.getElementById("boletin");
      txt.value = "";
      alert("¡Gracias por registrarte, espera proximante el boletin de Metallica!");
      event.preventDefault();  
    }
  
}