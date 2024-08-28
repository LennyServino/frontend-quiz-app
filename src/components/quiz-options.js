export function insertar_opciones() {
    const mainBody = document.querySelector('#mainContent');

    mainBody.innerHTML =`
        <section class="row pt-5 mt-5">
            <section class="col-md-6">
                <div class="section-title mx-auto">
                    <h1>Welcome to the <span class="fw-bolder">Frontend Quiz!</span></h1>
                    <p>Pick a subject to get started</p>
                </div>
            </section>
            <section class="col-md-6 d-flex flex-column align-items-center">
                <article class="quiz-card rounded-4 p-3 mb-3">
                    <img src="/src/images/codigo.png" alt="HTML icon" class="quiz-icon rounded-2 p-1 me-3">
                    <span class="fw-bold fs-4">HTML</span>
                </article>
                <article class="quiz-card rounded-4 p-3 my-3">
                    <img src="/src/images/brocha.png" alt="CSS icon" class="quiz-icon rounded-2 p-1 me-3">
                    <span class="fw-bold fs-4">CSS</span>
                </article>
                <article class="quiz-card rounded-4 p-3 my-3">
                    <img src="/src/images/JS.png" alt="JavaScript icon" class="quiz-icon rounded-2 p-1 me-3">
                    <span class="fw-bold fs-4">JavaScript</span>
                </article>
            </section>
        </section>    
    `;
}