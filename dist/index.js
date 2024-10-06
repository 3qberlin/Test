'use strict';

function clone(source) {
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
        return target;
    }
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

exports.clone = clone;
exports.type = type;
