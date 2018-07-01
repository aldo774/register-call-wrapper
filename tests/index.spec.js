import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import RegisterCallWrapper from '../src/index';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Register Call Wrapper Library', () => {
  it('should create an instance of registerCall', () => {
    let register_call = new RegisterCallWrapper({});
    expect(register_call).to.be.an.instanceof(RegisterCallWrapper);
  });

  it('should receive apiURL as an option', () => {
    let register_call = new RegisterCallWrapper({
      apiURL: 'blablabla',
    });

    expect(register_call.apiURL).to.be.equal('blablabla');
  });

  it('should use the default apiURL if not provided', () => {
    let register_call = new RegisterCallWrapper({});
    expect(register_call.apiURL).to.be.equal('https://api-registercall.herokuapp.com');
  });

  describe('request method', () => {
    let stubedFetch;
    let promise;

    beforeEach( () => {
      stubedFetch = sinon.stub(global, 'fetch');
      promise = stubedFetch.returnsPromise();
    });

    afterEach( () => {
      stubedFetch.restore();
    });

    it('should have request method', () => {
      let register_call = new RegisterCallWrapper({});
      expect(register_call.request).to.exist;
    });

    it('should call fetch when request', () => {
      let register_call = new RegisterCallWrapper({});
      register_call.request('url');

      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct url', () => {
      let register_call = new RegisterCallWrapper({});
      register_call.request('url');

      expect(stubedFetch).to.have.been.calledWith('url');
    });

  });

});
