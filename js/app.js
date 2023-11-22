/* 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/

//1er funion NUMERO_ALEATORIO

let numeroAleatorio = 0;

const numero_aleatorio = () => {
  const minimo = 1;
  const maximo = 10;
  numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
  console.log(`El boton aleatorio dio ${numeroAleatorio}`);
  return numeroAleatorio;
};

//2da funcion OBTENER_NUMERO_USUARIO
const obtener_numeroUsuario = (e) => {
  e.preventDefault();
  const input_ObtenerNumero = document.querySelector(".form-control").value;
  console.log(`el usuario dio ${input_ObtenerNumero}`);
  if (numeroAleatorio === input_ObtenerNumero) {
    alert(`GANASTE: ACERTASTE EL NÚMERO`);
  } else if (numeroAleatorio > input_ObtenerNumero) {
    alert(`FALLASTE: el numero mágico es mayor`);
  } else {
    alert(`FALLASTE: el número mágico es menor`);
  }
};
/* ----------------------------------------------------------------------------------------------------------- */
const btn_comenzarJuego = document.querySelector("#btn_comenzar");
btn_comenzarJuego.addEventListener("click", numero_aleatorio);

const formulario_numeroUsuario = document.querySelector("#formulario_numeroUsuario");
formulario_numeroUsuario.addEventListener("submit", obtener_numeroUsuario);
