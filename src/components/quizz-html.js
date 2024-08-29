//arreglo que contiene las preguntas del quiz html
const preguntasHTML = [
    {
        pregunta: "¿Cual es la etiqueta correcta para crear un hipervinculo?",
        respuestas: ["<link>", "<a>", "<href>", "<hyperlink>"],
        correcta: "<a>"
    },
    {
        pregunta: "¿Que significa HTML?",
        respuestas: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Making Language"],
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

export function mostrarQuizHTML() {
    const mainBody = document.querySelector('#mainContent');
    //crear el row que contendra el html del main
    const row = document.createElement('section');
    row.classList.add('row', 'pt-5', 'mt-5');

    //columna de la izquierda
    const colIzquierda = document.createElement('section');
    colIzquierda.classList.add('col-md-6');

    const sectionTitle = document.createElement('div');
    sectionTitle.classList.add('section-title', 'mx-auto');

    //numero de la pregunta
    const numeroPregunta = document.createElement('p');
    numeroPregunta.id = "numero-pregunta";

    //titulo de la pregunta
    const tituloPregunta = document.createElement('h2');
    tituloPregunta.id = "titulo-pregunta";

    sectionTitle.appendChild(numeroPregunta);
    sectionTitle.appendChild(tituloPregunta);
    colIzquierda.appendChild(sectionTitle);

    //columna derecha para las preguntas
    const colDerecha = document.createElement('section');
    colDerecha.classList.add('col-md-6', 'd-flex', 'flex-column', 'align-items-center');
    colDerecha.id = "pregunta-container";

    //boton de siguiente pregunta
    const botonSiguiente = document.createElement('button');
    botonSiguiente.id = 'boton-siguiente';
    botonSiguiente.classList.add('btn', 'btn-primary', 'mt-3');
    botonSiguiente.textContent = 'Siguiente';

    //construir todo el bloque
    row.appendChild(colIzquierda);
    row.appendChild(colDerecha)
    mainBody.appendChild(row);

    //insertamos la informacion
    cargarPregunta(0);

}

function cargarPregunta(index) {
    //obtenemos los elementos donde insertaremos la informacion
    const numeroPregunta = document.querySelector('#numero-pregunta');
    const tituloPregunta = document.querySelector('#titulo-pregunta');
    const preguntaContainer = document.querySelector('#pregunta-container');

    //obtenemos la pregunta segun el index
    let pregunta = preguntasHTML[index];

    //actualizar el numero y titulo de la pregunta
    numeroPregunta.textContent = `Pregunta ${index + 1} de ${preguntasHTML.length}`;
    tituloPregunta.textContent = pregunta.pregunta;

    //limpiar las opciones anteriores
    preguntaContainer.innerHTML = '';

    pregunta.respuestas.map(respuesta => {
        //Mostrar las respuestas
        const article = document.createElement('article');
        article.classList.add('quiz-card', 'rounded-4', 'p-3', 'mb-3');

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

        preguntaContainer.appendChild(article);
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