var $ = jQuery;

$(document).ready(function () {

    getAdmisiones('procesoTSU');

});


function getAdmisiones(tipo) {

    var html = "";
    $("#admisiones-list").empty();
    $("#admisiones-list").removeClass('transition_info');

    $.getJSON('../../json/procesoAdmision.json', function (data) {
        if (tipo == 'procesoTSU') {
            var array = data.procesoTSU;
        } else if (tipo == 'procesoING') {
            var array = data.procesoING;
        }

        var list = $('#admisiones-list');

        array.forEach(function (objeto) {
            html += `
                <div class="">
                    <h4>${objeto.info_general}</h4>
                    <ul>`;

            objeto.info_general_detalles.forEach(function (info) {
                html += `<li style='cursor: default'>${info}</li>`;
            });

            html += `</ul>`;

            objeto.detalles.forEach(function (detalle) {
                html += `<h4>${detalle.paso}</h4>
                    <ul>`;
                detalle.descripcion.forEach(function (desc) {
                    html += `<li style='cursor: default'>${desc}</li>`;
                });
                html += `</ul>`;
            });

            html += `</div>`;


        });

        setTimeout(function () {
            $('#admisiones-list').addClass('transition_info');
            list.append(html);
        }, 200)

    });


}


$(document).on('click', '#btn-tsu-list', function () {
    getAdmisiones('procesoTSU');
});


$(document).on('click', '#btn-ing-lic-list', function () {
    getAdmisiones('procesoING');
});
