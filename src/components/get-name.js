'use strict';

import React from 'react';

export default React.createClass({
    getInitialState: function() {
        return {name: ''};
    },
    onChange: function(e) {
        this.setState({name: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        this.props.update(this.state.name);
        this.setState({name: ''});
    },
    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>{this.props.label}:</label>
                <input type="text" value={this.state.name} onChange={this.onChange} />
            </form>
        );
    }
});
