var $ = jQuery;

$(document).ready(function () {

    getPasos('titulaciontsu');
    getPasos('titulacioning');
    getTSU('Normativa');
    getING('Normativa');

});


function getPasos(tipo) {

    var html = "";
    if (tipo == 'titulaciontsu') {
        $("#titulacion-tsu-pasos").empty();
        $("#titulacion-tsu-pasos").removeClass('transition_info');
    } else if (tipo == 'titulacioning') {
        $("#titulacion-ing-pasos").empty();
        $("#titulacion-ing-pasos").removeClass('transition_info');
    }

    $.getJSON('../../json/titulacion.json', function (data) {

        if (tipo == 'titulaciontsu') {
            var array = data.titulaciontsu;
            var list = $('#titulacion-tsu-pasos');
        } else if (tipo == 'titulacioning') {
            var array = data.titulacioning;
            var list = $('#titulacion-ing-pasos');
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
            if (tipo == 'reincorporacion') {
                $('#titulacion-tsu-pasos').addClass('transition_info');
            } else if (tipo == 'cambiout') {
                $('#titulacion-ing-pasos').addClass('transition_info');
            }
            list.append(html);
        }, 200)

    });


}


function getTSU(paso) {

    var html = "";
    $("#titulacion-tsu-list").empty();
    $("#titulacion-tsu-list").removeClass('transition_info');

    $.getJSON('../../json/titulacion.json', function (data) {

        var array = data.titulaciontsu;
        var list = $('#titulacion-tsu-list');

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
            $('#titulacion-tsu-list').addClass('transition_info');
            list.append(html);
        }, 200)

    });

}


function getING(paso) {

    var html = "";
    $("#titulacion-ing-list").empty();
    $("#titulacion-ing-list").removeClass('transition_info');

    $.getJSON('../../json/titulacion.json', function (data) {

        var array = data.titulacioning;
        var list = $('#titulacion-ing-list');

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
            $('#titulacion-ing-list').addClass('transition_info');
            list.append(html);
        }, 200)

    });

}


$(document).on('click', '.btn-becas-internas', function () {
    $('.btn-step').removeClass('active');
    $(this).find('.btn-step').addClass('active');
    var tipo = $(this).attr('data-tipo');
    var paso = $(this).attr('data-paso');


    if (tipo == 'titulaciontsu') {
        getTSU(paso);
    } else if (tipo == 'titulacioning') {
        getING(paso);
    }
});
