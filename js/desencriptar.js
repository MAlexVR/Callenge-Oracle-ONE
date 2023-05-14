const texto = document.getElementById("texto");
const resultado = document.getElementById("resultado");
const desencriptar = document.getElementById("desencriptar");

desencriptar.addEventListener("click", () => {
  const mensaje = texto.value;
  if (mensaje !== mensaje.replace(/[^a-z !]/g, "")) {
    alert(
      "Error: solo se aceptan letras minúsculas y el signo de admiración !"
    );
    texto.value = "";
    resultado.value = "";
  } else if (mensaje !== mensaje.replace(/[A-Z]/g, "")) {
    alert(
      "Error: solo se aceptan letras minúsculas al encriptar o desencriptar"
    );
    texto.value = "";
    resultado.value = "";
  } else {
    const desencriptado = mensaje
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    resultado.value = desencriptado;
  }
});
