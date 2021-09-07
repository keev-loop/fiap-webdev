function aloMundo() {	//função
	objDivResultado = document.getElementById("resultado");	// div-id
	objDivResultado.innerHTML += "Alô Mundo!<br>";
}

function soma(num1, num2) {
	return num1+num2;
}

window.onload = function() {
	objBotao = document.getElementById("botao");			// button
	objBotao.onclick = function() {
		aloMundo();		//chama função aloMundo
		
		objTxtNum1 = document.getElementById("num1");		// input-Texto 1
		objIntNum1 = parseInt(objTxtNum1.value);			// Numero a partir do Texto 1
		objTxtNum2 = document.getElementById("num2");		// input-Texto 2
		objIntNum2 = parseInt(objTxtNum2.value);			// Numero a partir do Texto 2
		objDivResultado2 = document.getElementById("resultado2");	// div-id
		
		//objDivResultado2.innerHTML += soma(soma(3,5), 8) + "<br>";
		objDivResultado2.innerHTML += soma(objIntNum1, objIntNum2) + "<br>";
	}
}