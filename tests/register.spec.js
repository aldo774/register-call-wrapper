import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromisse from 'sinon-stub-promise';

import { API_URL } from '../src/config';
import RegisterCall from '../src/index';

global.fetch = require('node-fetch');

chai.use(sinonChai);
sinonStubPromisse(sinon);

describe('Register Call Wrapper', () => {

  let fetchedStub;
  let promise;
  let register_call;

  beforeEach( () => {
    register_call = new RegisterCall({});
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach( () => {
    fetchedStub.restore();
  });

  describe('Smoke Tests', () => {
    // Registers

    it('should exist register registers method', () => {
      expect(register_call.register.registers).to.exist;
    });
  });

  describe('Register Registers', () => {
    it('should call fetch function', () => {

      let registers = register_call.register.registers();
      expect(fetchedStub).to.be.calledOnce;
    });

    it('should call fetch with the correct URL', () => {

      let register = register_call.register.registers();
      expect(fetchedStub).to.have.been
        .calledWith(`${API_URL}/register/?format=json`);

    });
  });
});
