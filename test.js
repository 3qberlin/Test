var expect = require("expect.js");
var clone = require("./src/index.js");
// import clone from './src/index.js';

describe('function clone', function () {
    describe('param data', function () {
        it('正確的測試使用案例', function () {
            // 基底資料型別
            expect(clone('abc')).throwError.equal('abc');

            // 陣列
            var arr = [1, [2]];
            var cloneArr = clone(arr);
            expect(cloneArr).not.to.equal(arr);
            expect(cloneArr).toeql(arr);

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