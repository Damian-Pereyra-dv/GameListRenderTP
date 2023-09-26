document.addEventListener("DOMContentLoaded", () => {
    const detalleVideojuego = document.getElementById("detalle-videojuego");
  
    // Obtener el ID del videojuego desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const idVideojuego = urlParams.get("id");
  
    // Obtener los datos de los videojuegos desde el localStorage
    const datosVideojuegos = JSON.parse(localStorage.getItem("videojuegos"));
  
    // Buscar el videojuego por ID
    const videojuegoSeleccionado = datosVideojuegos.videojuegos.find(
      (videojuego) => videojuego.id == idVideojuego
    );
  
    if (videojuegoSeleccionado) {
      // Crear un elemento div para mostrar los detalles del videojuego y agregarlo al DOM
      const contenedorDetallesVideojuego = document.createElement("div");
      contenedorDetallesVideojuego.classList.add("detalles-videojuego");
      contenedorDetallesVideojuego.innerHTML = `
      <h2>${videojuegoSeleccionado.nombre}</h2> <p>ID: ${videojuegoSeleccionado.id}</p>
      <p>Género: ${videojuegoSeleccionado.genero}</p>
      <p>Plataforma: ${videojuegoSeleccionado.plataforma}</p>
      <p>${videojuegoSeleccionado.descripcion}</p>
      <p>${videojuegoSeleccionado.fulldescripcion}</p>
      <img src="${videojuegoSeleccionado.imagen}" alt="${videojuegoSeleccionado.nombre}" />
      `;
      // Agregar al página principal
      detalleVideojuego.appendChild(contenedorDetallesVideojuego);
    }
  });