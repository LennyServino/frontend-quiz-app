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

    // **Nuevo contenedor** para las opciones de respuesta
    const respuestasContainer = document.createElement('div');
    respuestasContainer.id = "respuestas-container";
    respuestasContainer.classList.add('w-100', 'd-flex', 'flex-column', 'align-items-center');
    colDerecha.appendChild(respuestasContainer);

    //boton de siguiente pregunta
    const botonSiguiente = document.createElement('button');
    botonSiguiente.id = 'boton-siguiente';
    botonSiguiente.classList.add('btn', 'btn-primary', 'mt-3');
    botonSiguiente.textContent = 'Siguiente';

    //construir todo el bloque
    row.appendChild(colIzquierda);
    row.appendChild(colDerecha)
    colDerecha.appendChild(botonSiguiente);
    mainBody.appendChild(row);
}