"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var View =
/*#__PURE__*/
function () {
  function View(elemento) {
    _classCallCheck(this, View);

    this._elemento = elemento;
  }

  _createClass(View, [{
    key: "update",
    value: function update(model) {
      this._elemento.innerHTML = this._template(model);
    }
  }, {
    key: "_template",
    value: function _template(model) {
      throw new Error('O método template deve ser implementado.');
    }
  }]);

  return View;
}();