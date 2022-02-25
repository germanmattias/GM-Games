import { Juegos } from "./gameClass.js";

let listaJuegos = [];

window.agregarJuego = function (event) {
  event.preventDefault();
  if (
    validarCodigo(document.getElementById("codigoJuego")) &&
    validarCampoRequerido(document.getElementById("codigoJuego")) &&
    validarCampoRequerido(document.getElementById("serieJuego")) &&
    validarCampoRequerido(document.getElementById("categoriaJuego")) &&
    validarCampoRequerido(document.getElementById("descripcionJuego")) &&
    validarCampoRequerido(document.getElementById("imagenJuego"))
  ) {
    console.log("esta bien");
    //crear un nuevo juego
    let nuevoJuego = new Juegos(
      document.getElementById("codigoJuego").value,
      document.getElementById("codigoJuego").value,
      document.getElementById("serieJuego").value,
      document.getElementById("categoriaJuego").value,
      document.getElementById("descripcionJuego").value,
      document.getElementById("imagenJuego").value
    );
    //guardar el juego en el array
    console.log(nuevoJuego);
    listaJuegos.push(nuevoJuego);
    //guardar los datos en LS
    localStorage.setItem("listajuegoskey", JSON.stringify(listaJuegos));
    //mostrar alert de datos guardados
    Swal.fire(
      'Nuevo Juego',
      'El juego se agrego correctamente',
      'success'
    )
    //limpiar el formulario
    limpiarFormulario();

  } else {
    console.log("esta mal");
  }
}

function limpiarFormulario() {
  let formulario = document.getElementById('formJuego').reset();
  //limpiar la class de los input

}
