// importando sweet alert
import Swal from 'sweetalert2';
import { confetti } from '@tsparticles/confetti';

import { html, css, js, access } from '../data';
import { mostrarQuizHTML } from './mostrarHTML';

// Función para cargar el quiz según la materia
export function seleccionarQuiz(materia) {
  let preguntas;
  switch (materia) {
    case 'html':
      preguntas = html;
      break;
    case 'css':
      preguntas = css;
      break;
    case 'js':
      preguntas = js;
      break;
    case 'access':
      preguntas = access;
      break;
    default:
      throw new Error('Materia no soportada');
  }
  crearQuiz(preguntas);
}

// Inicializar el estado del quiz
let respuestasCorrectas = 0;

// Función para unir la estructura HTML con los datos de las preguntas
function crearQuiz(preguntas) {
  const botonHome = document.getElementById('home');
  const mainContent = document.querySelector('#mainContent');
  mainContent.innerHTML = '';
  mostrarQuizHTML();
  let boton = document.querySelector('#boton-siguiente');
  let i = 0;
  cargarPregunta(i, preguntas);
  boton.addEventListener('click', () => {
    const respuestas = document.querySelector('#respuestas-container');
    i++;
    if (i < preguntas.length) {
      cargarPregunta(i, preguntas);
    } else {
      Swal.fire({
        text: '¡Has completado el quiz!!',
        allowOutsideClick: true,
        title: `Respuestas correctas: ${respuestasCorrectas}`,
        icon: 'info',
        confirmButtonText: "Jugar de Nuevo",
        allowOutsideClick: false,
        allowEscapeKey: false
      }).then((result) => {
        if (result.isConfirmed) {
          // Click el botón para volver al inicio
          botonHome.click();
        }
      });
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  });
}

function cargarPregunta(index, preguntas) {
  // Obtener los elementos donde insertaremos la información
  const numeroPregunta = document.querySelector('#numero-pregunta');
  const tituloPregunta = document.querySelector('#titulo-pregunta');
  const respuestasContainer = document.querySelector('#respuestas-container');

  // Obtener la pregunta según el index
  let pregunta = preguntas[index];

  // Actualizar el número y título de la pregunta
  numeroPregunta.textContent = `Pregunta ${index + 1} de ${preguntas.length}`;
  tituloPregunta.textContent = pregunta.pregunta;

  // Limpiar las opciones anteriores
  respuestasContainer.innerHTML = '';

  pregunta.respuestas.forEach((respuesta, idx) => {
    // Mostrar las respuestas
    const article = document.createElement('article');
    article.classList.add('quiz-item', 'rounded-4', 'p-3', 'mb-3');

    // Sección de la imagen de la opción
    const img = document.createElement('img');
    img.src = `/src/images/alfabeto${idx}.png`;
    img.alt = `${respuesta} icon`;
    img.classList.add('quiz-icon', 'rounded-2', 'p-1', 'me-3');

    // Texto de la respuesta
    const textoRespuesta = document.createElement('span');
    textoRespuesta.textContent = respuesta;
    textoRespuesta.classList.add('fw-bold', 'fs-4');

    article.appendChild(img);
    article.appendChild(textoRespuesta);

    respuestasContainer.appendChild(article);
    article.addEventListener('click', () =>
      validarRespuesta(pregunta.correcta, respuesta)
    );
  });
}

function validarRespuesta(respuestaCorrecta, respuestaSeleccionada) {
  const botonSiguiente = document.getElementById('boton-siguiente');
  if (respuestaSeleccionada === respuestaCorrecta) {
    Swal.fire({
      text: '¡Buen trabajo!',
      title: '¡Respuesta correcta!',
      icon: 'success',
      confirmButtonText: "Siguiente pregunta",
      allowOutsideClick: false,
      allowEscapeKey: false

    }).then((result) => {
      if (result.isConfirmed) {
        // click en el botón para la siguiente pregunta
        botonSiguiente.click();
      }
    });

    confetti({
      icon: 'success',
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    respuestasCorrectas++;


  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: '¡Respuesta incorrecta!',
      confirmButtonText: "Siguiente pregunta",
      allowOutsideClick: false,
      allowEscapeKey: false
    }).then((result) => {
      if (result.isConfirmed) {
        // Click el botón para la siguiente pregunta
        botonSiguiente.click();


      }
    });
  }
}

export function restablecerJuego() {
  respuestasCorrectas = 0;
}
