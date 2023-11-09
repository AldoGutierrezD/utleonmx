var $ = jQuery;

$(document).ready(function () {

    getPasos('reinscripcion');
    getData('Septiembre - Diciembre 2023');

});


function getPasos(tipo) {

    var html = "";
    $("#data-pasos").empty();
    $("#data-pasos").removeClass('transition_info');


    $.getJSON('../../json/reinscripcion.json', function (data) {

        var array = data.reinscripcion;
        var list = $('#data-pasos');

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
            $('#data-pasos').addClass('transition_info');
            list.append(html);
        }, 200)

    });


}


function getData(paso) {

    var html = "";
    $("#data-list").empty();
    $("#data-list").removeClass('transition_info');

    $.getJSON('../../json/reinscripcion.json', function (data) {

        var array = data.reinscripcion;
        var list = $('#data-list');

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

                    // if (desc.link != '') {
                    //     html += `<a href='${desc.link}' target='_blank' class='btn-primary-utl'>Enlace</a>`;
                    // }

                }
            })


        });

        setTimeout(function () {
            $('#data-list').addClass('transition_info');
            list.append(html);
        }, 200)

    });

}


$(document).on('click', '.btn-becas-internas', function () {
    $('.btn-step').removeClass('active');
    $(this).find('.btn-step').addClass('active');

    var paso = $(this).attr('data-paso');
    getData(paso);
});
