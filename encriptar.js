const encriptarBtn = document.getElementById("encriptar");
const textoInput = document.getElementById("texto");
const resultadoOutput = document.getElementById("resultado");

encriptarBtn.addEventListener("click", () => {
  const texto = textoInput.value;
  if (texto !== texto.replace(/[^a-z !]/g, "")) {
    alert(
      "Error: solo se permiten letras minúsculas, espacios y signos de exclamación."
    );
    textoInput.value = "";
    resultadoOutput.value = "";
    return;
  }
  resultadoOutput.value = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
});
