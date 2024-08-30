import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '/src/css/mainStyles.css';
import { insertar_opciones } from './src/components/quiz-options';
import { crearQuizHTML } from './src/components/quizz-html';

document.addEventListener('DOMContentLoaded', () => {
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
        });

        // Evento de escucha para mostrar el quiz HTML
        opcionHTML.addEventListener('click', crearQuizHTML);
    }

    // Configurar los listeners iniciales
    configurarListeners();
});
