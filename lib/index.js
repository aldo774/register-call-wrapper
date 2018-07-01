'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global fetch */

var _register = require('./register');

var _register2 = _interopRequireDefault(_register);

var _config = require('./config');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RegisterCallWrapper = function () {
  function RegisterCallWrapper(options) {
    _classCallCheck(this, RegisterCallWrapper);

    this.apiURL = options.apiURL || _config.API_URL;
    this.register = _register2.default.bind(this)();
  }

  _createClass(RegisterCallWrapper, [{
    key: 'request',
    value: function request(url) {
      var headers = null;
      return fetch(url, headers).then(_utils.toJson);
    }
  }]);

  return RegisterCallWrapper;
}();

exports.default = RegisterCallWrapper;