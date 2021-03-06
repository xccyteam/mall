import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions'

@connect(
    //你需要state当中的什么参数 取出来就会放到props相对的参数当中
    state=>({value: state.test}),
    //你需要state当中的什么方法就可以写到下面的大括号中就能被放到props当中 并且会自动dispatch
    {increment,decrement}
)

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

export default Counter;