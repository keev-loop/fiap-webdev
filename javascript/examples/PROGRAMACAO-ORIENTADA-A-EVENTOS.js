window.onload = function() {
    // parte 1 - ao passar/retira mouse altera cor
    var oRetangulo = document.getElementById("retangulo");  // div-id

    oRetangulo.onmouseover = function() {
        oRetangulo.style.backgroundColor = "#008000";
    }

    oRetangulo.onmouseout = function() {
        oRetangulo.style.backgroundColor = "#FF80FF";
    }

    // parte 2 - valida campo CEP
    var oTxtCep = document.getElementById("cep");           // input-text
    var oDivMsgCep = document.getElementById("msgCep");     // div-id

    oTxtCep.onblur = function() {
        var oRegExp = new RegExp("^[0-9]{5}\-[0-9]{3}$");

        if (oRegExp.test(oTxtCep.value) == true) {
            oTxtCep.style.borderColor = "#008000";
            oDivMsgCep.style.color = "#008000";
            oDivMsgCep.innerHTML = "Campo preenchido com sucesso!";
        } else {
            oTxtCep.style.borderColor = "#FF0000";
            oDivMsgCep.style.color = "#FF0000";
            oDivMsgCep.innerHTML = "CEP inválido! Informe novamente.";
        }
    } 
    oTxtCep.onfocus = function() {
        oTxtCep.style.borderColor = "";
        oTxtCep.value = "";
        oDivMsgCep.style.color = "";
        oDivMsgCep.innerHTML = "";      
    }
}