import React, { Component } from 'react';
import withCounter from './WithCounter';

class HoverCount extends Component {


    render() {
        const { count, incrementCount } = this.props;

        return (
            <button style={{ display: "block" }} onMouseOver={incrementCount} className="btn btn-primary">Hoverd: {count}</button >
        );
    }
}

export default withCounter(HoverCount);