'use strict';

import chai from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument, Simulate, findRenderedDOMComponentWithTag } from 'react-addons-test-utils';
import Document from '../../src/components/document.js';

describe('components', function() {
    describe('Document', function() {
        it('dom rendering: rename form appears when heading clicked', function() {
            const component = renderIntoDocument(<Document parts={[]} />);

            const documentHeading = findRenderedDOMComponentWithTag(component, 'h1');
            const documentRendering = ReactDOM.findDOMNode(component);

            expect(documentRendering.querySelectorAll('form').length).to.equal(1);

            Simulate.click(documentHeading);

            expect(documentRendering.querySelectorAll('form').length).to.equal(2);
        });
    });
});

