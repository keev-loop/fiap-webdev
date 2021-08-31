"use strict";

$(document).ready(function () {
  function rodarEfeito(nmEfeito) {
    var options = {};

    switch (nmEfeito) {
      case "scale":
        options = {
          percent: 0
        };
        break;

      case "size":
        options = {
          to: {
            width: 150,
            height: 30
          }
        };
        break;

      case "transfer":
        options = {
          to: "#transfer",
          className: "ui-effects-transfer"
        };
        break;
    } // método de efeito do jQueryUI


    $("#efeito").effect(nmEfeito, options, 500, callback);
  } // ao clica em qualquer radio, envia a escolha para efeito


  $("input[type='radio']").click(function () {
    rodarEfeito($(this).val());
  }); // função de callback para trazer a caixa de volta

  function callback() {
    setTimeout(function () {
      $("#efeito").removeAttr("style").hide().fadeIn();
    }, 1000);
  }

  ;
});