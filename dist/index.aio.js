(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    // export function clone(source) {
    // if (source === undefined) return undefined; // 返回 undefined
    // if (source === null) return null; // 返回 null
    //     const t = type(source);
    //     if (t !== 'object' && t !== 'array') {
    //         return source;
    //     }

    //     let target;

    //     if (t === 'object') {
    //         target = {};
    //         for (let i in source) {
    //             if (source.hasOwnProperty(i)) {
    //                 target[i] = clone(source[i]);
    //             }
    //         }
    //     } else {
    //         target = [];

    //         for (let i = 0; i < source.length; i++) {
    //             target[i] = clone(source[i]);
    //         }
    //         return target;
    //     }
    // }

    // export function type(val) {
    //     if (Array.isArray(val)) {
    //         return 'array';
    //     } else if (val !== null && typeof val === 'object') {
    //         return 'object';
    //     } else {
    //         return typeof val;
    //     }
    // }

    function clone(source) {
        // 處理邊界條件
        if (source === undefined) return undefined; // 返回 undefined
        if (source === null) return null; // 返回 null
        
        const t = type(source);
        if (t !== 'object' && t !== 'array') {
            return source;
        }

        let target;

        if (t === 'object') {
            target = {};
            for (let i in source) {
                if (source.hasOwnProperty(i)) {
                    target[i] = clone(source[i]);
                }
            }
        } else {
            target = [];

            for (let i = 0; i < source.length; i++) {
                target[i] = clone(source[i]);
            }
        }
        return target;
    }

    function type(val) {
        if (Array.isArray(val)) {
            return 'array';
        } else if (val !== null && typeof val === 'object') {
            return 'object';
        } else {
            return typeof val;
        }
    }

    // 使用 module.exports 來導出函數
    module.exports = { clone, type };

}));
