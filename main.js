import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '/src/css/mainStyles.css';
import { insertar_opciones } from './src/components/quiz-options';
import { listenModeChange } from './src/utils/darkMode';
import { restablecerJuego, seleccionarQuiz } from './src/components/quizz-html';

document.addEventListener('DOMContentLoaded', () => {
  const darkModeBtn = document.querySelector('#flexSwitchCheckChecked');

  // Cambiar el tema de la página
  listenModeChange(darkModeBtn);

  // Iniciar la pantalla de opciones
  insertar_opciones();

  // Función para agregar listeners cuando se cambie de pantalla
  function configurarListeners() {
    let opcionHTML = document.querySelector('#opcion_html');
    let opcionCSS = document.querySelector('#opcion_css');
    let opcionJS = document.querySelector('#opcion_js');
    let opcionAccess = document.querySelector('#opcion_access');
    let opcionHome = document.querySelector('#home');

    // Evento de escucha para regresar a las opciones del quiz
    opcionHome.addEventListener('click', () => {
      insertar_opciones();
      configurarListeners(); // Reconfigurar los listeners
      restablecerJuego();
    });

    // Evento de escucha para mostrar el quiz según la opción seleccionada
    opcionHTML.addEventListener('click', () => seleccionarQuiz('html'));
    opcionCSS.addEventListener('click', () => seleccionarQuiz('css'));
    opcionJS.addEventListener('click', () => seleccionarQuiz('js'));
    opcionAccess.addEventListener('click', () => seleccionarQuiz('access'));
  }

  // Configurar los listeners iniciales
  configurarListeners();

  // Quitar la clase hidden de la etiqueta html cuando se cargue la página
  document.querySelector('html').classList.remove('hidden');
});
