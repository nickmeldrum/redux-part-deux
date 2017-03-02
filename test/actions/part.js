import chai from 'chai';

import * as actions from '../../src/actions/part.js';

const expect = chai.expect;

describe('actions', function() {
    describe('part', function() {
        it('should create an action to add a part', function() {
            const action = actions.addPart('new part');

            expect(action).to.deep.equal({
                type: actions.ADD_PART,
                name: 'new part'
            })
        });
    });
});

