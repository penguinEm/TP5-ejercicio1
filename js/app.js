/* 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
 */

//1er funion NUMERO ALEATORIO

const numero_aleatorio = () => {
  const minimo = 1;
  const maximo = 10;
  const numero_obtenido = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
  console.log(numero_obtenido)
  return numero_obtenido
};

const btn_comenzarJuego = document.querySelector("#btn_comenzar");
btn_comenzarJuego.addEventListener("click", numero_aleatorio);

const input_numero_aleatorio = document.querySelector("form-control")