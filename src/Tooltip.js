import React, { Component } from 'react'

class Tooltip extends Component {
    render() {
        return (
            <div class="tooltip">
                <span class="tooltiptext">{this.props.tooltipText}</span>
                {this.props.children}
            </div>
        )
    };
};

export default Tooltip;