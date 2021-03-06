'use strict';

const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

const chai = require('chai');
const Promise = require('bluebird');

enzyme.configure({adapter: new Adapter()});

Promise.config({
    longStackTraces: true
});

global.sinon = require('sinon');
global.expect = chai.expect;
global.assert = chai.assert;
global.enzyme = enzyme;

chai.use(require('chai-as-promised'));
chai.use(require('sinon-chai'));
sinon.assert.expose(chai.assert, {prefix: ''});
