//importando la funcion de creacion de la estructura html
import { mostrarQuizHTML } from "./mostrarHTML";

//arreglo que contiene las preguntas del quiz html
const preguntasHTML = [
    {
        pregunta: "¿Cual es la etiqueta correcta para crear un hipervinculo?",
        respuestas: ["<link>", "<a>", "<href>", "<hyperlink>"],
        correcta: "<a>"
    },
    {
        pregunta: "¿Que significa HTML?",
        respuestas: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks Text Markup Language", "Hyper Text Making Language"],
        correcta: "HyperText Markup Language"
    },
    {
        pregunta: "¿Qué atributo se utiliza para abrir un enlace en una nueva pestaña o ventana?",
        respuestas: ["target='_blank'", "href", "rel", "onclick"],
        correcta: "target='_blank'"
    },
    {
        pregunta: "¿Cuál es la etiqueta correcta para un salto de línea en HTML?",
        respuestas: ["<br>", "<hr>", "<p>", "<span>"],
        correcta: "<br>"
    },
    {
        pregunta: "¿Cuál es la etiqueta correcta para insertar una imagen en una página web?",
        respuestas: ["<img>", "<picture>", "<image>", "<photo>"],
        correcta: "<img>"
    },
    {
        pregunta: "¿Cuál de las siguientes es la etiqueta correcta para crear una lista ordenada?",
        respuestas: ["<ul>", "<ol>", "<li>", "<dl>"],
        correcta: "<ol>"
    },
    {
        pregunta: "¿Qué etiqueta se utiliza para definir un encabezado en HTML?",
        respuestas: ["<h1>", "<heading>", "<h>", "<header"],
        correcta: "<h1>"
    },
    {
        pregunta: "¿Qué etiqueta se utiliza para definir un párrafo en HTML?",
        respuestas: ["<p>", "<paragraph>", "<text>", "<sentence>"],
        correcta: "<p>"
    },
    {
        pregunta: "¿Cuál de las siguientes etiquetas se usa para crear un formulario en HTML?",
        respuestas: ["<form>", "<input>", "<button>", "<label>"],
        correcta: "<form>"
    },
    {
        pregunta: "¿Qué etiqueta se utiliza para crear un botón en HTML?",
        respuestas: ["<button>", "<input>", "<link>", "<a>"],
        correcta: "<button>"
    }
];

//Función para unir la estructura html con los datos de las preguntas
export function crearQuizHTML() {
    mostrarQuizHTML();
    let boton = document.querySelector('#boton-siguiente');
    let i = 0;
    cargarPregunta(i)
    boton.addEventListener('click', () => {
        i++;
        cargarPregunta(i)

    })
}


export function cargarPregunta(index) {
    //obtenemos los elementos donde insertaremos la informacion
    const numeroPregunta = document.querySelector('#numero-pregunta');
    const tituloPregunta = document.querySelector('#titulo-pregunta');
    const respuestasContainer = document.querySelector('#respuestas-container');

    //obtenemos la pregunta segun el index
    let pregunta = preguntasHTML[index];

    //actualizar el numero y titulo de la pregunta
    numeroPregunta.textContent = `Pregunta ${index + 1} de ${preguntasHTML.length}`;
    tituloPregunta.textContent = pregunta.pregunta;

    //limpiar las opciones anteriores
    respuestasContainer.innerHTML = '';

    pregunta.respuestas.map(respuesta => {
        //Mostrar las respuestas
        const article = document.createElement('article');
        article.classList.add('quiz-item', 'rounded-4', 'p-3', 'mb-3');

        //seccion de la imagen de la opcion
        const img = document.createElement('img');
        img.src = "/src/images/codigo.png";
        img.alt = `${respuesta} icon`;
        img.classList.add('quiz-icon', 'rounded-2', 'p-1', 'me-3');

        //texto de la respuesta
        const textoRespuesta = document.createElement('span');
        textoRespuesta.textContent = respuesta;
        textoRespuesta.classList.add('fw-bold', 'fs-4');

        article.appendChild(img);
        article.appendChild(textoRespuesta);

        respuestasContainer.appendChild(article);
    })

}

export function prueba() {
    preguntasHTML.map(preguntasObj => {
        console.log(preguntasObj.pregunta);
        preguntasObj.respuestas.map(respuesta => {
            console.log(respuesta);
        })
    })
}