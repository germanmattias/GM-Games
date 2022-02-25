function validarCodigo(input){
  if(input.value != '' && !isNaN(input.value)){
    input.className = 'form-control is-valid';
    return true;
  }else{
    input.className = 'form-control is-invalid';
    return false;
  }
}

function validarCampoRequerido(input){
  if(input.value != ''){
    input.className = 'form-control is-valid';
    return true;
  }else{
    input.className = 'form-control is-invalid';
    return false;
  }
}

function validarGeneral(event){
  event.preventDefault();
  let envio = document.getElementById('mensajeEnvio');
  if(validarCodigo(document.getElementById('codigoJuego'))&&
  validarCampoRequerido(document.getElementById('codigoJuego'))&&
  validarCampoRequerido(document.getElementById('serieJuego'))&&
  validarCampoRequerido(document.getElementById('categoriaJuego'))&&
  validarCampoRequerido(document.getElementById('descripcionJuego'))&&
  validarCampoRequerido(document.getElementById('imagenJuego'))){
    // envio.className = 'alert alert-success';
    // envio.innerHTML = 'Juego cargado con exito';
    console.log('esta bien');
  }else{
    // envio.className = 'alert alert-danger';
    // envio.innerHTML = 'No se pudo cargar el juego';
    console.log('esta mal');
  }
}