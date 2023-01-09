import { assert } from 'chai';
import { merge } from '../src/merge';

describe('Merge Tests', () => {
        it('should merge 2 sorted arrays into 1 sorted array', () => {
        const createArray = (length: number, max: number) => [...new Array(length)]
            .map(() => Math.round(Math.random() * max));
        const arrayA = createArray(5, 100).sort((a, b) => a - b);
        const arrayB = createArray(5, 100).sort((a, b) => a - b);
        const expect = [...arrayA, ...arrayB].sort((a, b) => a - b);
        const result = merge(arrayA, arrayB);
        assert.deepEqual(result, expect);
    });
});