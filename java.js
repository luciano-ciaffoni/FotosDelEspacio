let key = "AjqRmTO2mtF3IqFxFidvp3ZhxJcewz5anGdNXVjX"



let imagenDeldia = document.querySelector("#imagenDelDia")
let botonDelDia = document.querySelector("#botonDelDia")
let titulo = document.querySelector("#titulo")
let Autor = document.querySelector("#Autor")
let Descripcion = document.querySelector("#Descripcion")


botonDelDia.onclick = function () {
   fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
   .then(res => res.json())
   .then(fotoDeldia => {
    imagenDeldia.src = fotoDeldia.hdurl
    titulo.textContent = fotoDeldia.title
    Autor.textContent = fotoDeldia.copyright
    Descripcion.textContent = fotoDeldia.explanation

    botonDelDia.onclick = function () {
  if (imagenDeldia.style.display === "none") {
    imagenDeldia.style.display = "block"
  } else {
    imagenDeldia.style.display = "none"
     titulo.textContent = "Titulo imagen"
     Autor.textContent =  "Autor"
     Descripcion.textContent = "Descripcion"
  }
}

   })
}
  

let imagenFecha = document.querySelector("#imagenFecha")
let botonFecha = document.querySelector("#botonFecha")
let fechaUsuario = document.querySelector("#fecha")
let tituloFecha = document.querySelector("#tituloFecha")
let AutorFecha = document.querySelector("#AutorFecha")
let DescripcionFecha = document.querySelector("#DescripcionFecha")


botonFecha.onclick = function () {
  console.log(fechaUsuario)
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${fechaUsuario.value}`)
  .then(res => res.json())
  .then(fotoFecha => {
    imagenFecha.src = fotoFecha.hdurl
     tituloFecha.textContent = fotoFecha.title
    AutorFecha.textContent = fotoFecha.copyright
    DescripcionFecha.textContent = fotoFecha.explanation

 
}

  )
}

let  imagenAleatoria = document.querySelector("#imagenAleatoria")
let  botonAleatoria = document.querySelector("#botonAleatoria")
let tituloAleatorio = document.querySelector("#tituloAleatorio")
let AutorAleatorio = document.querySelector("#AutorAleatorio")
let DescripcionAleatorio = document.querySelector("#DescripcionAleatorio")
let año = document.querySelector("#año")


botonAleatoria.onclick = function () {
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&count=1`)
    .then(respuesta => respuesta.json())
    .then(data => {
      let fotoAleatorio = data[0];
      imagenAleatoria.src = fotoAleatorio.url;
        tituloAleatorio.textContent = fotoAleatorio.title
    AutorAleatorio.textContent = fotoAleatorio.copyright
       DescripcionAleatorio.textContent = fotoAleatorio.explanation
       año.textContent = fotoAleatorio.date

   
    });
};
  
