import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions'

class Counter extends Component {
    onIncrease() {
        this.props.increment(5);
    }
    onDecrement() {
        this.props.decrement(3);
    }
    render() {
        const { value } = this.props;
        return (
            <div>
                Test: 测试{value}
                <button onClick={this.onIncrease.bind(this)}>增加1</button>
                <button onClick={this.onDecrement.bind(this)}>减少1</button>
            </div>
        );
    }
}

export default connect(state => ({
    value: state.test
}), {
    increment,
    decrement
})(Counter);