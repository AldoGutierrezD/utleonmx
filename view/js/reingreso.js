var $ = jQuery;

$(document).ready(function () {

    getPasos('reincorporacion');
    getPasos('cambiout');
    getBaja('1er paso');
    getCambio('Dirigido a:');

});


function getPasos(tipo) {

    var html = "";
    if (tipo == 'reincorporacion') {
        $("#por-baja-pasos").empty();
        $("#por-baja-pasos").removeClass('transition_info');
    } else if (tipo == 'cambiout') {
        $("#cambiout-pasos").empty();
        $("#cambiout-pasos").removeClass('transition_info');
    }

    $.getJSON('../../json/reingreso.json', function (data) {

        if (tipo == 'reincorporacion') {
            var array = data.reincorporacion;
            var list = $('#por-baja-pasos');
        } else if (tipo == 'cambiout') {
            var array = data.cambiout;
            var list = $('#cambiout-pasos');
        }

        var i = 1;
        array.forEach(function (objeto) {

            objeto.descripcion.forEach(function (desc) {

                var paso = desc.paso;

                html += `
                    <button class='btn-becas-internas' data-tipo='${tipo}' data-paso='${paso}'>
                        <div class='btn-step'>${i}</div>
                        <div>
                            <h3>${paso}</h3>
                        </div>
                    </button>
                `;

                i++;
            })

        });

        setTimeout(function () {
            if (tipo == 'reincorporacion') {
                $('#por-baja-pasos').addClass('transition_info');
            } else if (tipo == 'cambiout') {
                $('#cambiout-pasos').addClass('transition_info');
            }
            list.append(html);
        }, 200)

    });


}


function getBaja(paso) {

    var html = "";
    $("#por-baja-list").empty();
    $("#por-baja-list").removeClass('transition_info');

    $.getJSON('../../json/reingreso.json', function (data) {

        var array = data.reincorporacion;
        var list = $('#por-baja-list');

        array.forEach(function (objeto) {

            objeto.descripcion.forEach(function (desc) {

                if (desc.paso === paso) {

                    html += `
                        <h4>${desc.paso}</h4>
                        <ul>
                    `;

                    desc.detalles.forEach(function (detalle) {
                        html += `<li>${detalle}</li>`;
                    });

                    html += `</ul>`;

                    if (desc.link != '') {
                        html += `<a href='${desc.link}' target='_blank' class='btn-primary-utl' style='margin-top: 15px;'>Enlace</a>`;
                    }

                }
            })


        });

        setTimeout(function () {
            $('#por-baja-list').addClass('transition_info');
            list.append(html);
        }, 200)

    });

}


function getCambio(paso) {

    var html = "";
    $("#cambiout-list").empty();
    $("#cambiout-list").removeClass('transition_info');

    $.getJSON('../../json/reingreso.json', function (data) {

        var array = data.cambiout;
        var list = $('#cambiout-list');

        array.forEach(function (objeto) {

            objeto.descripcion.forEach(function (desc) {

                if (desc.paso === paso) {

                    html += `
                        <h4>${desc.paso}</h4>
                        <ul>
                    `;

                    desc.detalles.forEach(function (detalle) {
                        html += `<li>${detalle}</li>`;
                    });

                    html += `</ul>`;

                    if (desc.link != '') {
                        html += `<a href='${desc.link}' target='_blank' class='btn-primary-utl' style='margin-top: 15px;'>Enlace</a>`;
                    }

                }
            })


        });

        setTimeout(function () {
            $('#cambiout-list').addClass('transition_info');
            list.append(html);
        }, 200)

    });

}


$(document).on('click', '.btn-becas-internas', function () {
    $('.btn-step').removeClass('active');
    $(this).find('.btn-step').addClass('active');
    var tipo = $(this).attr('data-tipo');
    var paso = $(this).attr('data-paso');


    if (tipo == 'reincorporacion') {
        getBaja(paso);
    } else if (tipo == 'cambiout') {
        getCambio(paso);
    }
});
