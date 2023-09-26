fetch("./videojuegos.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => localStorage.setItem("videojuegos", JSON.stringify(datos)));

document.addEventListener("DOMContentLoaded", () => {
    const gridVideojuegos = document.getElementById("grid-videojuegos");
    const datosVideojuegos = JSON.parse(localStorage.getItem("videojuegos"));
    console.log(datosVideojuegos);
    if (datosVideojuegos) {
      datosVideojuegos.videojuegos.forEach((videojuego) => {
        //   1.- Creamos un elemento <div> para cada videojuego
        const gridItem = document.createElement("div");
        //   2.- Agregamos la clase "grid-item" al div que contiene el nombre del videojuego y su información
        gridItem.classList.add("grid-item");  
        //    3.- Agregamos una etiqueta h4 con el texto del título a nuestro nuevo elemento <div>.
        gridItem.innerHTML = `<h4>${videojuego.nombre}</h4>` + `<h5>${videojuego.descripcion}</h5>`;
  
        gridItem.addEventListener("click", () => {
          mostrarDetallesVideojuego(videojuego);
        });
        
        gridVideojuegos.appendChild(gridItem);
      });
    }
  });
  
  function mostrarDetallesVideojuego(videojuego) {
    // Redireccionar a otra página para mostrar los detalles
    window.location.href = `videojuego.html?id=${videojuego.id}`; 
  }