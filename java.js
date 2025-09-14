
let key = "AjqRmTO2mtF3IqFxFidvp3ZhxJcewz5anGdNXVjX"



let imagenDeldia = document.querySelector("#imagenDelDia")
let botonDelDia = document.querySelector("#botonDelDia")
let titulo = document.querySelector("#titulo")

botonDelDia.onclick = function () {
   fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
   .then(res => res.json())
   .then(fotoDeldia => {
    imagenDeldia.src = fotoDeldia.hdurl
    titulo.textContent = fotoDeldia.title

    botonDelDia.onclick = function () {
  if (imagenDeldia.style.display === "none") {
    imagenDeldia.style.display = "block"
  } else {
    imagenDeldia.style.display = "none"
     titulo.textContent = "Titulo imagen"
  }
}

   })
}
  

let imagenFecha = document.querySelector("#imagenFecha")
let botonFecha = document.querySelector("#botonFecha")
let fechaUsuario = document.querySelector("#fecha")

botonFecha.onclick = function () {
  console.log(fechaUsuario)
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${fechaUsuario.value}`)
  .then(res => res.json())
  .then(fotoFecha => {
    imagenFecha.src = fotoFecha.hdurl

 
}

  )
}



  