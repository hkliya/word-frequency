"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var wordFrequency = require("../lib/main.js");

describe("Word Frequency", function(){
    it("should return empty string given empty string", function(){
        expect(wordFrequency('')).to.equal('');
    });
});