$(document).ready(function () {
    // Al hacer clic en los botones
    $(".buttons_utl button").on("click", function () {
        var id = this.id;
        var title = "";
        var description = "";

        if (id === 'btn-mision') {
            title = "Misión";
            description = "Formar ciudadanos/as del mundo con educación tecnológica de calidad a través de la docencia, la investigación aplicada, la difusión del conocimiento y la vinculación, que contribuyan a la innovación y al desarrollo sustentable.";
        }

        if (id === 'btn-vision') {
            title = "Visión";
            description = "Somos una universidad reconocida por su calidad internacional, sus aportaciones al desarrollo de la tecnología y al bienestar de la sociedad.";
        }

        if (id === 'btn-valores') {
            title = "Valores";
            description = "Dignidad. Honestidad. Libertad. Búsqueda de la verdad. Responsabilidad. Justica";
        }

        $(".content-box_utl h2").text(title);
        $(".content-box_utl p").text(description);
    });
});
