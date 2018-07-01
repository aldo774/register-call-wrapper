"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = register;
function registerRout() {
  return this.request(this.apiURL + "/register/?format=json");
}

function register() {
  return {
    registers: registerRout.bind(this)
  };
}