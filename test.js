import test from 'node:test';
import assert from 'node:assert';
import {add} from "./actualtest.js";

test('add_fnc_test',(_)=>{
    const actual = add(2, 3);
    const expected = 5;
    assert.strictEqual(actual, expected);
});