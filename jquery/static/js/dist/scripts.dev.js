"use strict";

//parte-1
$(document).ready(function () {
  //Implementa o evento de click no elemento cujo id é "botao".
  $("#botao").click(function () {
    //Aplica a folha de estilo "vermelho" em todos os elementos <p>
    $("p").addClass("vermelho");
  });
}); //parte-2

$(document).ready(function () {
  //quadrado começa invisível
  $("#quadrado").hide(); //quando o mouse passar pelo alvo, mostra quadrado

  $("#alvo").mouseover(function () {
    $("#quadrado").slideToggle("slow");
  }); //quando o mouse sair do alvo, some com o quadrado

  $("#alvo").mouseout(function () {
    $("#quadrado").slideToggle("slow");
  });
}); //parte-3

$(document).ready(function () {
  $("#quadrado3").mouseover(function () {
    $("#quadrado3").animate({
      width: "200px",
      height: "200px"
    });
  });
}); //parte-4

$(document).ready(function () {
  // Sumir com todos os span's
  $("span").hide(); // Aplica evento de blur (perda de foco) em todos os inputs
  // do tipo "type"

  $("input[type='text']").blur(function () {
    // this representa o objeto que disparou o evento, no
    // caso, a caixa de texto que o usuário acabou de sair
    // (seja qual da duas for!)
    if ($(this).val().length == 0) {
      // Exibe o elemento seguinte (o span logo depois!)
      $(this).next().show();
    }
  }); // Aplicado no ganho de foco de todas as caixas de texto,
  // some com o span imediatamente após (Caso sua mensagem
  // esteja sendo exibida!)

  $("input[type='text']").focus(function () {
    $(this).next().hide();
  });
}); //parte-5

$(document).ready(function () {
  $("#todos").click(function () {
    // Se o checkbox todos estiver marcado.
    if ($("#todos").is(':checked')) {
      // Este comando marcaria todos os checkboxes
      //$("input[name='interesses']").prop('checked',true);
      // mas o ideal é disparar um evento de clique em cada
      // um deles e acionar a programação do evento.
      $("input[name='interesses']").trigger("click");
    } else {
      // Se o checkbox todos estiver desmarcado.
      // Desmarca todos os outros checkboxes
      $("input[name='interesses']").prop('checked', false);
    }
  }); // Quando um dos checkboxes de interesse é clicado,
  // exibe o conteúdo no console.

  $("input[name='interesses']").click(function () {
    console.log($(this).val());
  });
});
/* parte 4 */

$(document).ready(function () {
  // Evento keyup ao digitar na caixa de texto.
  $("#sigla").keyup(function () {
    // Se o tamanho do conteúdo da caixa for igual a 2
    // (sigla digitada completamente)
    if ($("#sigla").val().length == 2) {
      $.ajax({
        url: "ajax_jquery.php",
        method: "POST",
        // enviar a sigla
        data: "sigla=" + $("#sigla").val(),
        // Se a requisição voltar com sucesso.
        success: function success(result) {
          $("#resultado").html(result);
        },
        // Se a requisição NÃO voltar com sucesso.
        error: function error() {
          $("#resultado").html("Houve uma falha na requisição.");
        }
      });
    } else {
      $("#resultado").html("");
    }
  });
});
/* 
$(document).ready(function() {
  // Evento keyup ao digitar na caixa de texto.
  $("#sigla").keyup(function() {
    // Se o tamanho do conteúdo da caixa for igual a 2
    // (sigla digitada completamente)
    if($("#sigla").val().length == 2) {
      $("#resultado").load("ajax1_server.php", { "sigla": $("#sigla").val() });
    } else {
      $("#resultado").html("");
    }
  });
});
 */

/* parte 5 */

$(document).ready(function () {
  // Chamada do plug-in. A opção "format" permite configurar
  // a hora para o formato 0-23 horas.
  $("#tempo").timeDropper({
    format: 'H:mm'
  });
});
$(document).ready(function () {
  $("#dial").knob({
    'min': 0,
    'max': 100,
    'lineCap': 'round'
  });
});
/* parte 6 */
//Declaração do plug-in

$.fn.meuPlugin = function (options) {
  //Tratamento de parâmetros
  var defaults = {
    'corDeFundo': 'yellow'
  };
  var settings = $.extend({}, defaults, options);
  this.css({
    backgroundColor: settings.corDeFundo
  }); //Resolve a questão do cascateamento de chamadas de método.

  return this;
};

$(document).ready(function () {
  //Chamada do plug-in passando parâmetro
  //com métodos em cascata
  $("input").meuPlugin({
    corDeFundo: "red"
  }).hide();
});