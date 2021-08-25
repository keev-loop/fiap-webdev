"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Consulta =
/*#__PURE__*/
function () {
  function Consulta(nome, data, peso, altura) {
    _classCallCheck(this, Consulta);

    this._nome = nome;
    this._data = this._data = new Date(data.getTime());
    this._peso = peso;
    this._altura = altura;
    Object.freeze(this);
  }

  _createClass(Consulta, [{
    key: "imc",
    get: function get() {
      return this._peso / (this._altura / 100 * (this._altura / 100));
    }
  }, {
    key: "nome",
    get: function get() {
      return this._nome;
    }
  }, {
    key: "data",
    get: function get() {
      return new Date(this._data.getTime());
    }
  }, {
    key: "peso",
    get: function get() {
      return this._peso;
    }
  }, {
    key: "altura",
    get: function get() {
      return this._altura;
    }
  }]);

  return Consulta;
}();