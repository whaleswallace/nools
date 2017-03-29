'use strict';

const assert = require('assert');
const nools = require('../../');

describe('simple rule', () => {
    let called = 0;

    class HelloFact {
        constructor() {
            this.value = true;
        }
    }

    const flow = nools.flow('hello world flow', (flow) => {
        flow.rule('hello rule', [HelloFact, 'h'], () => {
            called += 1;
        });
    });

    it('should call hello world rule', () => {
        const session = flow.getSession();
        session.assert(new HelloFact());
        return session.match().then(() => {
            assert.equal(called, 1);
        });
    });
});
