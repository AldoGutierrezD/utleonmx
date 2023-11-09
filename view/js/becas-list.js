var $ = jQuery;

$(document).ready(function () {

    getBecas('becasInternas');

});


function getBecas(tipo) {

    var html = "";
    $("#becas-list").empty();
    $("#becas-list").removeClass('transition_info');

    $.getJSON('../../json/becas.json', function (data) {
        if (tipo == 'becasInternas') {
            var array = data.becasInternas;
        } else if (tipo == 'becasExternas') {
            var array = data.becasExternas;
        } else if (tipo == 'servicioBecario') {
            var array = data.servicioBecario;
        }

        var list = $('#becas-list');

        array.forEach(function (objeto) {
            html += `
                <div class="faq-card-becas toggleButton">
                    <div class="faq-content">
                        <p>${objeto.titulo}
            `;

            objeto.labels.forEach(function (lbl) {
                html += `<span class='badge' style='background-color: ${lbl.color}'>${lbl.texto}</span>`;
            });

            html += `</p>
                    </div>
                    <div class="additional-info">`;

            objeto.descripcion.forEach(function (desc) {
                html += `<b>${desc.paso}</b><br>
                    <p>${desc.detalles}</p>`;
            });

            html += `</div>
                </div>`


        });

        setTimeout(function () {
            $('#becas-list').addClass('transition_info');
            list.append(html);
        }, 200)

    });


}


$(document).on('click', '#btn-becas-internas', function () {
    getBecas('becasInternas');
});


$(document).on('click', '#btn-becas-externas', function () {
    getBecas('becasExternas');
});


$(document).on('click', '#btn-servicio-becario', function () {
    getBecas('servicioBecario');
});
