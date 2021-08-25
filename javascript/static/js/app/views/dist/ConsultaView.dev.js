"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ConsultasView =
/*#__PURE__*/
function () {
  function ConsultasView() {
    _classCallCheck(this, ConsultasView);
  }

  _createClass(ConsultasView, [{
    key: "template",
    value: function template() {
      return "\n        <table class=\"table table-primary\">\n            <thead class=\"thead-primaryrk\">\n                <tr>\n                    <th scope=\"col\">Nome</th>\n                    <th scope=\"col\">Data da Consulta</th>\n                    <th scope=\"col\">Peso (kg)</th>\n                    <th scope=\"col\">Altura (m)</th>\n                    <th scope=\"col\">IMC</th>\n                </tr>\n            </thead>\n            \n            <tbody>\n\n            </tbody>\n        </table>\n        ";
    }
  }]);

  return ConsultasView;
}();