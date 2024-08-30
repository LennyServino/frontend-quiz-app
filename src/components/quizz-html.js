//importando sweet alert
import Swal from 'sweetalert2';

import { confetti } from '@tsparticles/confetti';

//arreglo que contiene las preguntas del quiz html
import preguntasHTML from '../data/html.json';

//importando la funcion de creacion de la estructura html
import { mostrarQuizHTML } from './mostrarHTML';

// Inicializar el estado del quiz
// let preguntaActual = 0;
let respuestasCorrectas = 0;
// let yaSeleccionado = false;

//Función para unir la estructura html con los datos de las preguntas
export function crearQuizHTML() {
  const mainContent = document.querySelector('#mainContent');
  mainContent.innerHTML = '';
  mostrarQuizHTML();
  let boton = document.querySelector('#boton-siguiente');
  let i = 0;
  cargarPregunta(i);
  boton.addEventListener('click', () => {
    i++;
    boton.classList.add('disabled');
    const respuestas = document.querySelector('#respuestas-container');
    if (i < preguntasHTML.length) {
      cargarPregunta(i);
    } else {
      Swal.fire(
        `Has completado el quiz! \n\nRespuestas correctas: ${respuestasCorrectas}`
      );
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  });
}

export function cargarPregunta(index) {
  //obtenemos los elementos donde insertaremos la informacion
  const numeroPregunta = document.querySelector('#numero-pregunta');
  const tituloPregunta = document.querySelector('#titulo-pregunta');
  const respuestasContainer = document.querySelector('#respuestas-container');

  //obtenemos la pregunta segun el index
  let pregunta = preguntasHTML[index];

  //actualizar el numero y titulo de la pregunta
  numeroPregunta.textContent = `Pregunta ${index + 1} de ${
    preguntasHTML.length
  }`;
  tituloPregunta.textContent = pregunta.pregunta;

  //limpiar las opciones anteriores
  respuestasContainer.innerHTML = '';

  let indexRespuesta = 0;
  pregunta.respuestas.map((respuesta) => {
    //Mostrar las respuestas
    const article = document.createElement('article');
    article.classList.add('quiz-item', 'rounded-4', 'p-3', 'mb-3');

    //seccion de la imagen de la opcion
    const img = document.createElement('img');
    img.src = `/src/images/alfabeto${indexRespuesta}.png`;
    img.alt = `${respuesta} icon`;
    img.classList.add('quiz-icon', 'rounded-2', 'p-1', 'me-3');

    //texto de la respuesta
    const textoRespuesta = document.createElement('span');
    textoRespuesta.textContent = respuesta;
    textoRespuesta.classList.add('fw-bold', 'fs-4');

    article.appendChild(img);
    article.appendChild(textoRespuesta);

    respuestasContainer.appendChild(article);
    article.addEventListener('click', () =>
      validarRespuesta(pregunta.correcta, respuesta)
    );
    indexRespuesta++;
  });
}

function validarRespuesta(respuestaCorrecta, respuestaSeleccionada) {
  if (respuestaSeleccionada === respuestaCorrecta) {
    Swal.fire('respuesta correcta!');
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    respuestasCorrectas++;

    //habilitamos el boton para la siguiente pregunta
    const botonSiguiente = document.getElementById('boton-siguiente');
    botonSiguiente.classList.remove('disabled');
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Respuesta incorrecta!',
    });
  }
}

export function restablecerJuego() {
  respuestasCorrectas = 0;
}
