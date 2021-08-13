import React, { Component } from 'react';
import withCounter from './WithCounter';
class ClickCounter extends Component {


    render() {
        const { count, incrementCount } = this.props;
        return (
            <button onClick={incrementCount} className="btn btn-primary">Clicked: {count}</button >
        );
    }
}

export default withCounter(ClickCounter);