/* global fetch */

import register from './register';
import { API_URL } from './config';
import { toJson } from './utils';

export default class RegisterCallWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.register = register.bind(this)();
  }

  request(url) {
    const headers = null;
    return fetch(url, headers).then(toJson);
  }
}
