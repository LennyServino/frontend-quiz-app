import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '/src/css/mainStyles.css';
import { insertar_opciones } from './src/components/quiz-options';
import { prueba, crearQuizHTML } from './src/components/quizz-html';

document.addEventListener('DOMContentLoaded', () => {
    //insertar_opciones();
    crearQuizHTML();
    //prueba();
});
