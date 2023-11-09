var $ = jQuery;

$(document).ready(function () {

    getPasos('temporal');
    getPasos('definitiva');
    getTemporal('Paso 1');
    getDefinitiva('Paso 1');

});


function getPasos(tipo) {

    var html = "";
    if (tipo == 'temporal') {
        $("#temporal-pasos").empty();
        $("#temporal-pasos").removeClass('transition_info');
    } else if (tipo == 'definitiva') {
        $("#definitiva-pasos").empty();
        $("#definitiva-pasos").removeClass('transition_info');
    }

    $.getJSON('../../json/baja.json', function (data) {

        if (tipo == 'temporal') {
            var array = data.temporal;
            var list = $('#temporal-pasos');
        } else if (tipo == 'definitiva') {
            var array = data.definitiva;
            var list = $('#definitiva-pasos');
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
            if (tipo == 'temporal') {
                $('#temporal-pasos').addClass('transition_info');
            } else if (tipo == 'cambiout') {
                $('#definitiva-pasos').addClass('transition_info');
            }
            list.append(html);
        }, 200)

    });


}


function getTemporal(paso) {

    var html = "";
    $("#temporal-list").empty();
    $("#temporal-list").removeClass('transition_info');

    $.getJSON('../../json/baja.json', function (data) {

        var array = data.temporal;
        var list = $('#temporal-list');

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
            $('#temporal-list').addClass('transition_info');
            list.append(html);
        }, 200)

    });

}


function getDefinitiva(paso) {

    var html = "";
    $("#definitiva-list").empty();
    $("#definitiva-list").removeClass('transition_info');

    $.getJSON('../../json/baja.json', function (data) {

        var array = data.definitiva;
        var list = $('#definitiva-list');

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
            $('#definitiva-list').addClass('transition_info');
            list.append(html);
        }, 200)

    });

}


$(document).on('click', '.btn-becas-internas', function () {
    $('.btn-step').removeClass('active');
    $(this).find('.btn-step').addClass('active');
    var tipo = $(this).attr('data-tipo');
    var paso = $(this).attr('data-paso');


    if (tipo == 'temporal') {
        getTemporal(paso);
    } else if (tipo == 'definitiva') {
        getDefinitiva(paso);
    }
});
