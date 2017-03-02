import chai from 'chai';

import { ADD_PART } from '../../src/actions/part.js';
import parts from '../../src/reducers/parts.js';

const expect = chai.expect;

describe('reducers', function() {
    describe('parts', function() {
        it('add part action adds a part to the array', function() {
            const newState = parts([], {
                type: ADD_PART,
                name: 'a new part'
            });

            expect(newState.length).to.equal(1);
            expect(newState[0].name).to.equal('a new part');
        });
    });
});

