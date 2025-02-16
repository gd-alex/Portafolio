// hover card

let cardProyectos = document.querySelectorAll(".card-proyectos")

// 

let rootStyles = getComputedStyle(document.documentElement);

let colorNeutros80 = rootStyles.getPropertyValue("--main-color-neutros80").trim();
let colorNeutros70 = rootStyles.getPropertyValue("--main-color-neutros70").trim();

// 

cardProyectos.forEach(cardProyectos => {
    let titleProyecto = cardProyectos.querySelector(".title-trabajo");

    cardProyectos.addEventListener("mouseover", function(){
        titleProyecto.style.backgroundColor = colorNeutros70;
    });
    
    cardProyectos.addEventListener("mouseout", function(){
        titleProyecto.style.backgroundColor = colorNeutros80;
    });
});
