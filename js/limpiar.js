const botonLimpiar = document.getElementById("limpiar");

botonLimpiar.addEventListener("click", () => {
  document.getElementById("texto").value = "";
  document.getElementById("resultado").value = "";
});
