export default function validarCrearCuenta(valores) {
  let errores = {};

  // Validar nombre del usuario
  if (!valores.nombre) {
    errores.nombre = "El nombre es obligatorio";
  }

  // Validar email
  if (!valores.email) {
    errores.email = "El Email es Obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
    //Expresion regular para validar email
    errores.email = "Email no valido"
  }

  // Validar Password
  if(!valores.password){
    errores.password = "El password es obligatorio"
  }else if(valores.password.length < 6){
    errores.password = "El password debe ser de al menos 6 caracteres"
  }
  return errores;
}
