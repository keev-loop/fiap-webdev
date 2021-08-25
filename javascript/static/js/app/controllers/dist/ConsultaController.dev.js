"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ConsultaController =
/*#__PURE__*/
function () {
  function ConsultaController() {
    _classCallCheck(this, ConsultaController);

    var $ = document.querySelector.bind(document);
    this._inputNome = $('#nome');
    this._inputData = $('#data');
    this._inputPeso = $('#peso');
    this._inputAltura = $('#altura');
    this._listaConsultas = new ListaConsultas();
    this._consultasView = new ConsultasView($('#consultasView'));

    this._consultasView.update(this._listaConsultas);

    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView($('#mensagemView'));
  }

  _createClass(ConsultaController, [{
    key: "adiciona",
    value: function adiciona(evento) {
      evento.preventDefault();

      this._listaConsultas.adiciona(this._criaConsulta());

      this._mensagem.texto = 'Consulta adicionada com sucesso.';

      this._mensagemView.update(this._mensagem);

      this._consultasView.update(this._listaConsultas);

      this._limpaFormulario();
    }
  }, {
    key: "_criaConsulta",
    value: function _criaConsulta() {
      return new Consulta(this._inputNome.value, DateHelper.textoParaData(this._inputData.value), this._inputPeso.value, this._inputAltura.value);
    }
  }, {
    key: "_limpaFormulario",
    value: function _limpaFormulario() {
      this._inputNome.value = "";
      this._inputPeso.value = "";
      this._inputAltura.value = "";
      this._inputData.value = "";

      this._inputNome.focus();
    }
  }]);

  return ConsultaController;
}();