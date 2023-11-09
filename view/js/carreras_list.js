var $ = jQuery;

$(document).ready(function () {

    getCarreras('carreraTSU');

});


function getCarreras(carrera) {

    var html = "";
    $("#carreras-list").empty();
    $("#carreras-list").removeClass('transition_info');

    $.getJSON('./json/carreras.json', function (data) {
        if (carrera == 'carreraTSU') {
            var array = data.carreraTSU;
        } else {
            var array = data.carrerasING;
        }

        var list = $('#carreras-list');

        array.forEach(function (objeto) {

            html += `<li><a href='view/alumnos/descripcion-carrera.html?carrera=${objeto.slug}'>${objeto.titulo}</a></li>`;

        });

        setTimeout(function () {
            $('#carreras-list').addClass('transition_info');
            list.append(html);
        }, 200)

    });

}


$(document).on('click', '#btn-tsu-list', function () {
    getCarreras('carreraTSU');
});


$(document).on('click', '#btn-ing-lic-list', function () {
    getCarreras('carrerasING');
});
