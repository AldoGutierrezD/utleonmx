var $ = jQuery;

$(document).ready(function () {

    // Obtiene el valor del parámetro "carrera" de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const carreraParam = urlParams.get("carrera");

    // Función para buscar en una sección del JSON por slug
    function buscarCarreraEnSeccion(seccion) {
        return seccion.find(carrera => carrera.slug === carreraParam);
    }

    // Realizar la solicitud AJAX para obtener el JSON
    $.getJSON('../../json/carreras.json', function (jsonData) {

        const carreraEnTSU = buscarCarreraEnSeccion(jsonData.carreraTSU);
        const carreraEnING = buscarCarreraEnSeccion(jsonData.carrerasING);

        // Verificar en cuál sección se encontró la carrera
        if (carreraEnTSU) {
            // Se encontró en carreraTSU
            const titulo = carreraEnTSU.titulo;
            const planMaterias = carreraEnTSU.plan_materias;
            const perfilIngreso = carreraEnTSU.perfil_ingreso;
            const perfilEgreso = carreraEnTSU.perfil_egreso;
            console.log("Carrera encontrada en carreraTSU");
            console.log("Titulo:", titulo);
            console.log("Plan de Materias:", planMaterias);
            console.log("Perfil de Ingreso:", perfilIngreso);
            console.log("Perfil de Egreso:", perfilEgreso);

            agregarInfoCarrera(titulo, planMaterias, perfilIngreso, perfilEgreso);
        } else if (carreraEnING) {
            // Se encontró en carrerasING
            const planMaterias = carreraEnING.plan_materias;
            const perfilIngreso = carreraEnING.perfil_ingreso;
            const perfilEgreso = carreraEnING.perfil_egreso;
            console.log("Carrera encontrada en carrerasING");
            console.log("Plan de Materias:", planMaterias);
            console.log("Perfil de Ingreso:", perfilIngreso);
            console.log("Perfil de Egreso:", perfilEgreso);
        } else {
            // La carrera no se encontró en ninguna sección
            console.log("Carrera no encontrada en el JSON.");
        }
    });




});


function agregarInfoCarrera(titulo, planMaterias, perfilIngreso, perfilEgreso) {

    //TITULO
    const carrera_titulo = titulo.split(" ");
    const area = carrera_titulo[0];
    const resto_carrera = carrera_titulo.slice(1).join(" ");
    var html = '';

    $(".text-highlight").text(area);
    $(".text-highlight").append(`<span class='title-header' style='color: #000'>${resto_carrera}</span>`);


    //PLAN DE MATERIAS
    planMaterias.forEach(function (materia) {

        html += `
            <div class='card-carrera'>
                <h3>${materia.titulo}</h3>
                <ul>
        `;

        materia.materias.forEach(function (asignatura) {
            html += `<li>${asignatura}</li>`;
        })

        html += `</ul></div>`;

    });

    $(".glider").html(html);

    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });


    //PERFILES
    perfilIngreso.forEach(function (ingreso) {
        $("#perfil_ingreso").find('ul').append(`<li>${ingreso}</li>`);
    });

    perfilEgreso.forEach(function (egreso) {
        $("#perfil_egreso").find('ul').append(`<li>${egreso}</li>`);
    });

}
