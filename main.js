import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '/src/css/mainStyles.css';
import { insertar_opciones } from './src/components/quiz-options';
import { crearQuizHTML, restablecerJuego } from './src/components/quizz-html';
import { listenModeChange } from './src/utils/darkMode';

document.addEventListener('DOMContentLoaded', () => {
  const darkModeBtn = document.querySelector('#flexSwitchCheckChecked');

  // Cambiar el tema de la página
  listenModeChange(darkModeBtn);

  // Iniciar la pantalla de opciones
  insertar_opciones();

  // Función para agregar listeners cuando se cambie de pantalla
  function configurarListeners() {
    let opcionHTML = document.querySelector('#opcion_html');
    let opcionHome = document.querySelector('#home');

    // Evento de escucha para regresar a las opciones del quiz
    opcionHome.addEventListener('click', () => {
      insertar_opciones();
      configurarListeners(); // Reconfigurar los listeners
      restablecerJuego();
    });

    // Evento de escucha para mostrar el quiz HTML
    opcionHTML.addEventListener('click', crearQuizHTML);
  }

  // Configurar los listeners iniciales
  configurarListeners();

  // Quitar la clase hidden de la etiqueta html cuando se cargue la página
  document.querySelector('html').classList.remove('hidden');
});
