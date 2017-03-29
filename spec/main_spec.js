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

    it("should return a 1 given a", function(){
        expect(wordFrequency('a')).to.equal('a 1');
    });

    it("should return a 1 b 1 given a b", function(){
        expect(wordFrequency('a b')).to.equal('a 1\r\nb 1');
    });
});