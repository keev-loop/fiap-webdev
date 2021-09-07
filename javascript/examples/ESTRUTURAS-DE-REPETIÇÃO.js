window.onload = function() {

// parte 1
//	var objDivSaida = document.getElementById("saida");		// div-id

//	var i=1;
//	while(i < 10) {
//		objDivSaida.innerHTML += i + "<br>";
//		i++;
//	}

//	var i=1;
//	do {
//		objDivSaida.innerHTML += i + "<br>";
//		i++;
//	} while(i < 10);
	
//	for(var i=1; i <= 10; i++) {
//		objDivSaida.innerHTML += i + "<br>";
//	}

// parte 2
	var aLinguagens = ["JavaScript","Java","PHP","Python"];
	var ObjDivSaida = document.getElementById("saida");		// div-id

	for(sLinguagens in aLinguagens) {
		objDivSaida.innerHTML += i + "<br>";
	}
}