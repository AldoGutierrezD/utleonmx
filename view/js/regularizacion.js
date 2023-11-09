var $ = jQuery;

$(document).ready(function () {

    getPasos('recuperacion');
    getPasos('extraordinario');
    getRecuperacion('Paso 1');
    getExtraordinario('Paso 1');

});


function getPasos(tipo) {

    var html = "";
    if (tipo == 'recuperacion') {
        $("#recuperacion-pasos").empty();
        $("#recuperacion-pasos").removeClass('transition_info');
    } else if (tipo == 'extraordinario') {
        $("#extraordinario-pasos").empty();
        $("#extraordinario-pasos").removeClass('transition_info');
    }

    $.getJSON('../../json/regularizacion.json', function (data) {

        if (tipo == 'recuperacion') {
            var array = data.recuperacion;
            var list = $('#recuperacion-pasos');
        } else if (tipo == 'extraordinario') {
            var array = data.extraordinario;
            var list = $('#extraordinario-pasos');
        }

        var i = 1;
        array.forEach(function (objeto) {

            html += `
                <button class='btn-becas-internas' data-tipo='${tipo}' data-paso='${objeto.titulo}'>
                    <div class='btn-step'>${i}</div>
                    <div>
                        <h3>${objeto.titulo}</h3>
                    </div>
                </button>
            `;

            i++;


        });

        setTimeout(function () {
            if (tipo == 'recuperacion') {
                $('#recuperacion-pasos').addClass('transition_info');
            } else if (tipo == 'cambiout') {
                $('#extraordinario-pasos').addClass('transition_info');
            }
            list.append(html);
        }, 200)

    });


}


function getRecuperacion(paso) {

    var html = "";
    $("#recuperacion-list").empty();
    $("#recuperacion-list").removeClass('transition_info');

    $.getJSON('../../json/regularizacion.json', function (data) {

        var array = data.recuperacion;
        var list = $('#recuperacion-list');

        array.forEach(function (objeto) {

            if (objeto.titulo === paso) {

                html += `
                    <h4>${objeto.titulo}</h4>
                    <ul>
                `;

                objeto.descripcion.forEach(function (desc) {

                    html += `<li style='cursor:default;'>${desc}</li>`;

                });

                html += `</ul>`;
            }

        });

        setTimeout(function () {
            $('#recuperacion-list').addClass('transition_info');
            list.append(html);
        }, 200)

    });

}


function getExtraordinario(paso) {

    var html = "";
    $("#extraordinario-list").empty();
    $("#extraordinario-list").removeClass('transition_info');

    $.getJSON('../../json/regularizacion.json', function (data) {

        var array = data.extraordinario;
        var list = $('#extraordinario-list');

        array.forEach(function (objeto) {

            if (objeto.titulo === paso) {

                html += `
                    <h4>${objeto.titulo}</h4>
                    <ul>
                `;

                objeto.descripcion.forEach(function (desc) {

                    html += `<li style='cursor:default;'>${desc}</li>`;

                });

                html += `</ul>`;
            }

        });

        setTimeout(function () {
            $('#extraordinario-list').addClass('transition_info');
            list.append(html);
        }, 200)

    });

}


$(document).on('click', '.btn-becas-internas', function () {
    $('.btn-step').removeClass('active');
    $(this).find('.btn-step').addClass('active');
    var tipo = $(this).attr('data-tipo');
    var paso = $(this).attr('data-paso');


    if (tipo == 'recuperacion') {
        getRecuperacion(paso);
    } else if (tipo == 'extraordinario') {
        getExtraordinario(paso);
    }
});
