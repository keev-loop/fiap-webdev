// - parte 1
$(document).ready(function() {
    function rodarEfeito(nmEfeito) {
        var options = {};
        switch (nmEfeito) {
            case "scale":
                options = { percent: 0 };
                break;
            case "size":
                options = { to: { width: 150, height: 30 } };
                break;
            case "transfer":
                options = { to: "#transfer", className: "ui-effects-transfer" };
                break;
        }
        // método de efeito do jQueryUI
        $("#efeito").effect(nmEfeito, options, 500, callback);
    }

    // ao clica em qualquer radio, envia a escolha para efeito
    $("input[type='radio']").click(function() {
        rodarEfeito($(this).val());
    });
    // função de callback para trazer a caixa de volta
    function callback() {
        setTimeout(function() {
            $("#efeito").removeAttr("style").hide().fadeIn();
        }, 1000);
    };
});

// - parte 2
$(document).ready(function() {
    $("#quadrado").resizable().draggable();
});

// - parte 3
$(document).ready(function() {
    $('#melhores_filmes').sortable({
        placeholder: 'placeholder'
    });
});

// - parte 4
$(document).ready(function() {
    $('#accordion').accordion();
});

// - parte 5
$(document).ready(function() {
    $('#menu').menu();
});

// - parte 6
$(document).ready(function() {
    $("#data").datepicker({
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        nextText: 'Próximo',
        prevText: 'Anterior'
    });
});