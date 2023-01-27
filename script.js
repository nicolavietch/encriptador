function encrypt() {
  // Obtener el texto de entrada
  var input = document.getElementById("text-input").value;

  // Reemplazar las letras según las llaves de encriptación
  input = input.replace(/e/g, "enter");
  input = input.replace(/i/g, "imes");
  input = input.replace(/a/g, "ai");
  input = input.replace(/o/g, "ober");
  input = input.replace(/u/g, "ufat");

  // Establecer el texto encriptado en el campo de salida
  document.getElementById("text-output").value = input;
  console.log(input);
}

function decrypt() {
  // Obtener el texto encriptado
  var input = document.getElementById("text-output").value;
  console.log(input);
  // Reemplazar las letras según las llaves de encriptación
  input = input.replace(/enter/g, "e");
  input = input.replace(/imes/g, "i");
  input = input.replace(/ai/g, "a");
  input = input.replace(/ober/g, "o");
  input = input.replace(/ufat/g, "u");

  // Establecer el texto desencriptado en el campo de entrada
  document.getElementById("text-input").value = input;
  console.log(input);
}
