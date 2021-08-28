<?php
// Pega a informação 'sigla' da requisição HTTP POST.
// Transforma em letras maiúsculas com strtoupper()
$sigla = (isset($_POST['sigla']) ? strtoupper($_POST['sigla']) : "");
// Analisa a sigla e devolve o estado por extenso.
// A cláusula 'default' devolve exceções.. siglas inválidas // fora da região sudeste não são realizadas (o exemplo
// ficaria muito grande!)
switch($sigla) {
  case "SP":
    echo "São Paulo";
  break;
  case "RJ":
    echo "Rio de Janeiro";
  break;
  case "MG":
    echo "Minas Gerais";
  break;
  case "ES":
    echo "Espírito Santo";
  break;
  default:
    echo "Não é um estado do sudeste.";
}
?>