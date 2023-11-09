var $ = jQuery;

$(document).ready(function () {

    getPasosIMSS();
    getIMSS('Obtén tu número de seguro');

});


function getPasosIMSS() {

    var html = "";
    $("#imss-pasos").empty();
    $("#imss-pasos").removeClass('transition_info');

    $.getJSON('../../json/imss.json', function (data) {

        var array = data.imss;
        var list = $('#imss-pasos');

        var i = 1;

        array.forEach(function (objeto) {

            html += `
                <button class='btn-becas-internas' data-tipo='imss' data-paso='${objeto.titulo}'>
                    <div class='btn-step'>${i}</div>
                    <div>
                        <h3>${objeto.titulo}</h3>
                    </div>
                </button>
                `;
            i++;

        });

        setTimeout(function () {
            $('#imss-pasos').addClass('transition_info');
            list.append(html);
        }, 200)

    });


}


function getIMSS(paso) {

    var html = "";
    $("#imss-list").empty();
    $("#imss-list").removeClass('transition_info');

    $.getJSON('../../json/imss.json', function (data) {

        var array = data.imss;
        var list = $('#imss-list');

        array.forEach(function (objeto) {

            if (objeto.titulo === paso) {

                html += `
                    <h4>${objeto.titulo}</h4>
                    <ul>
                `;

                objeto.descripcion.forEach(function (desc) {

                    html += `<li style='cursor: default;'>${desc}</li>`;

                });

                html += `</ul>`;

                if (objeto.link != '') {
                    html += `<a href='${objeto.link}' target='_blank' class='btn-primary-utl' style='margin-top: 15px;'>Enlace</a>`;
                }
            }


        });

        setTimeout(function () {
            $('#imss-list').addClass('transition_info');
            list.append(html);
        }, 200)

    });

}


$(document).on('click', '.btn-becas-internas', function () {
    $('.btn-step').removeClass('active');
    $(this).find('.btn-step').addClass('active');
    var tipo = $(this).attr('data-tipo');
    var paso = $(this).attr('data-paso');


    if (tipo == 'imss') {
        getIMSS(paso);
    } else if (tipo == 'constancias') {
        getConstancias(paso);
    }
});
