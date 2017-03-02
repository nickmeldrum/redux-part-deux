'use strict';

import React from 'react';

import GetName from './get-name.js';
import Parts from './parts.js';

export default React.createClass({
    getInitialState: function() {
        return {renaming: false};
    },
    addPart: function(name) {
        this.props.addPart(name);
    },
    showRenameDocument: function() {
        this.setState({renaming: true});
    },
    renameDocument: function(name) {
        this.props.renameDocument(name);
        this.setState({renaming: false});
    },
    render: function() {
        return (
            <div>
                <h1 onClick={this.showRenameDocument} style={{cursor: 'pointer'}}>
                {this.props.name ? `Document: ${this.props.name}` : 'My document!'}
                </h1>
                {this.props.renaming ? 'Renaming doc...' : ''}
                {this.state.renaming ?  <GetName label="Rename Document" update={this.renameDocument} /> : ''}

                <GetName label="Add Part" update={this.addPart} />

                <Parts parts={this.props.parts} />
            </div>
        );
    }
});
