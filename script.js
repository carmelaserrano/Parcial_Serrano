function validarApellido() {
  const apellido = document.getElementById("apellido").value;
  const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

  if (!soloLetras.test(apellido)) {
    alert("Apellido inválido. Solo letras.");
    return false;
  }
  alert("Apellido válido.");
  return true;
}

function validarNombre() {
  const nombre = document.getElementById("nombre").value;
  const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

  if (!soloLetras.test(nombre)) {
    alert("Nombre inválido. Solo letras.");
    return false;
  }
  alert("Nombre válido.");
  return true;
}

function validarDNI() {
  const dni = document.getElementById("dni").value;
  const soloNumeros = /^\d{8}$/;

  if (!soloNumeros.test(dni)) {
    alert("DNI inválido. Deben ser exactamente 8 dígitos numéricos.");
    return false;
  }
  alert("DNI válido.");
  return true;
}

function validarFechaNacimiento() {
  const fechaInput = document.getElementById("fechaNacimiento").value;
  const fecha = new Date(fechaInput);
  const fechaLimite = new Date("2006-12-31");

  if (!fechaInput || fecha <= fechaLimite) {
    alert("Fecha inválida. Debe ser posterior al año 2006.");
    return false;
  }
  alert("Fecha válida.");
  return true;
}

function validarEmail() {
  const email = document.getElementById("email").value;
  const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formatoEmail.test(email)) {
    alert("Correo inválido. Ingrese un email correcto.");
    return false;
  }
  alert("Email válido.");
  return true;
}

function hacerPreguntas() {
  const r1 = prompt("¿Cuál es tu nacionalidad?");
  const r2 = prompt("¿Cuál es tu color favorito?");
  const r3 = prompt("¿Cuál es el nombre de tu mascota?");

  if (r1 && r2 && r3) {
    document.getElementById("respuestas").value = `${r1}-${r2}-${r3}`;
  } else {
    alert("Debes responder las 3 preguntas.");
  }
}

function validarFormulario() {
  return (
    validarApellido() &&
    validarNombre() &&
    validarDNI() &&
    validarFechaNacimiento() &&
    validarEmail()
  );
}
