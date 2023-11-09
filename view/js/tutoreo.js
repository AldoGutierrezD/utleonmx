var $ = jQuery;

$(document).ready(function () {

    getPasos();
    getData('Detención');

});


function getPasos() {

    var html = "";
    $("#data-pasos").empty();
    $("#data-pasos").removeClass('transition_info');

    $.getJSON('../../json/tutoreo.json', function (data) {

        var array = data.tutoreo;
        var list = $('#data-pasos');

        var i = 1;

        array.forEach(function (objeto) {

            html += `
                <button class='btn-becas-internas' data-tipo='tutoreo' data-paso='${objeto.titulo}'>
                    <div class='btn-step'>${i}</div>
                    <div>
                        <h3>${objeto.titulo}</h3>
                    </div>
                </button>
                `;
            i++;

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

    $.getJSON('../../json/tutoreo.json', function (data) {

        var array = data.tutoreo;
        var list = $('#data-list');

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
            }


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
    var tipo = $(this).attr('data-tipo');
    var paso = $(this).attr('data-paso');

    getData(paso)
});
