

let botonesAbrir = document.querySelectorAll(".btn-vermas");
let overlay = document.getElementById("overlay-proyectos");
let overlayTitulo = document.getElementById("overlay-titulo");
let overlayImg = document.getElementById("multimedia-overlay");
let programas = document.getElementById("listaprogramas-overlay");
let overlayDesc = document.getElementById("descripcion-overlay");
let botonCerrar = document.getElementById("btn-cerrar-overlay");

botonesAbrir.forEach(boton => {
    boton.addEventListener("click", () => {
        console.log("Botón clickeado"); // ✅ Verificar si el click funciona

        overlayTitulo.textContent = "";
        overlayDesc.textContent = "";
        programas.innerHTML = "";
        overlayImg.src = "";

        let titulo = boton.getAttribute("data-title");
        let descripcion = boton.getAttribute("data-desc");
        let url = boton.getAttribute("data-url");

        console.log("Título obtenido:", titulo);
        console.log("Descripción obtenida:", descripcion);
        console.log("URL del iframe:", url);

        // Asegurarme de que el card tiene una lista de programas
        let listaProgramas = boton.closest(".card-proyectos").querySelectorAll(".softwares");
        let programasHTML = Array.from(listaProgramas).map(prog => prog.outerHTML).join("");
        programas.innerHTML = programasHTML;

        console.log("Programas obtenidos:", programasHTML);

        // Obtener la imagen del card
        let imagen = boton.closest(".card-proyectos").querySelector(".card-proyectos-img").id;

        console.log("Imagen obtenida:", imagen);

        // Insertar datos en el overlay
        overlayTitulo.textContent = titulo;
        overlayDesc.textContent = descripcion;
        programas.innerHTML = programasHTML;


        if (url) {
            overlayImg.src = url;
            overlayImg.style.display = "block";
        } else {
            overlayImg.style.display = "none";
        }


        // Mostrar el overlay
        overlay.classList.add("activo");
    });
});


// Cerrar haciendo clic fuera del modal
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        console.log("Click fuera del modal, cerrando...");
        overlay.classList.remove("activo");
    }
});