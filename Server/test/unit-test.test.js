const assert = require('chai').assert;

const addValue = (a, b) => a + b ;

describe('Test Test', () => {
    it('should return 2', () => { // Test Description
        // Pure test
        let va = addValue(2,2);
        assert.equal(va, 4);
    });
});