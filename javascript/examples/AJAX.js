window.onload = function() {
	var oBotao = document.getElementById("botao");
	var oDiv = document.getElementById("cidades");

	oBotao.onclick = function() {
		var xhttp = new XMLHttpRequest();
		xttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				oDiv.innerHTML = "<prev>"+xhttp.responseText+"</prev>";
			}
		};
		xhttp.open("GET", "ajax1_cidades.txt", true);
		xhttp.send();
	}
}