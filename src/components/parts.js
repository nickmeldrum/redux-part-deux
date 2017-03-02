'use strict';

import React from 'react';

export default React.createClass({
    render: function() {
        const renderPart = part => <li key={part.id}>{part.name}</li>;
        return (
            <div>
                <h2>Parts:</h2>
                <ul>
                    {this.props.parts.map(renderPart)} 
                </ul>
            </div>
        );
    }
});
