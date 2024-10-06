// var expect = require("expect.js");
// var clone = require("./src/index.js").clone;
// var getUrlParam = require("./src/index.js").getUrlParam;
// const JSDOM = require('mocha-jsdom');


import expect from 'expect.js';
import { clone, getUrlParam} from './src/index.js';
import JSDOM from 'mocha-jsdom';

describe('function clone', function () {
    describe('param data', function () {
        it('正確的測試使用案例', function () {
            // 基底資料型別
            expect(clone('abc')).to.equal('abc');

            // 陣列
            var arr = [1, [2]];
            var cloneArr = clone(arr);
            expect(cloneArr).not.to.equal(arr);
            expect(cloneArr).to.eql(arr);

            // 物件
            var obj = { a: { b: 1 } };
            var cloneObj = clone(obj);
            expect(cloneObj).not.to.equal(obj);
            expect(cloneObj).to.eql(obj);
        });

        it('邊界值測試使用案例', function () {
            expect(clone()).to.equal(undefined);
            expect(clone(undefined)).to.equal(undefined);
            expect(clone(null)).to.equal(null);
        })
    })
})

describe('獲取當前 URL 中的參數', function(){
    JSDOM({url: 'https://***.com/?a=1'});
    it('參數(id)的值', function(){
        expect(getUrlParam('a')).to.be.equal('1');
    })
})