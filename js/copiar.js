// Obtenemos los elementos del DOM
const outputResultado = document.getElementById("resultado");
const botonCopiar = document.getElementById("copiar");

// Función que copia el contenido del cuadro de texto de resultado al portapapeles
const copiar = () => {
  // Seleccionamos el contenido del cuadro de texto de resultado
  outputResultado.select();
  // Copiamos el contenido seleccionado al portapapeles
  document.execCommand("copy");
  // Deseleccionamos el contenido del cuadro de texto de resultado
  window.getSelection().removeAllRanges();
  // Mostramos un mensaje de éxito
  alert("El texto ha sido copiado al portapapeles.");
};

// Asignamos el evento click al botón Copiar
botonCopiar.addEventListener("click", copiar);
