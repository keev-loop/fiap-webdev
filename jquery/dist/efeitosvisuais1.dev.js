"use strict";

//parte-2
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