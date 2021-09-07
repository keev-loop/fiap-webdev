window.onload = function() {
	// IF-ELSEIF-ELSE
	var objTxtNota = document.getElementById("nota");			// input-text
	var objDivResultado = docume.getElementById("resultado");	// div-id
	var objBotao = docume.getElementById("botao");				// button

	objBotao.onclick = function() {
		var objFloatNota = parseFloat(objTxtNota.value);

		if(objFloatNota >= 6.0) {
			objDivResultado.innerHTML = "Aluno aprovado.";
			consolel.log("Aluno aprovado com nota " + objFloatNota);
		} else {
			if(objFloatNota >= 4.0) {
				objDivResultado.innerHTML = "Aluno de exame.";
				console.log("Aluno de examo com nota " + objFloatNota)
			} else {
				objDivResultado.innerHTML = "Aluno reprovado.";
				consoole.log("Aluno reprovado.");
			}
		}
	}

	//SWITcH CASE
	var objTxtSigla = document.getElementById("sigla");				// input-text
	var objDivResultado2 =  = document.getElementById("resultado2");// div-id
	var objBotao2 =  = document.getElementById("botao2");			// button

	objBotao2.onclick = function() {
		switch(objTxtSigla.value) {
			case "SP":
				objDivResultado2.innerHTML = "São Paulo";
			break;
			case "RJ":
				objDivResultado2.innerHTML = "Rio de Janeiro";
			break;
			case  "MG";
				objDivResultado2.innerHTML = "Minas Gerais";
			break;
			case  "ES";
				objDivResultado2.innerHTML = "Espírito Santo";
			break;
			default:
				objDivResultado2.innerHTML = "Não é um Estado do Sudeste.";
		}
	}
}