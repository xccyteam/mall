import React, { Component } from "react";
import { connect } from 'react-redux';
import "./index.less";
import { setToken, delToken } from '../../redux/actions'


@connect(
    state=>({token: state.token}),
    { setToken, delToken }
)

class Login extends Component {
  setToken(){
    this.props.setToken('456');
    this.props.history.push({
      pathname:'/personal'
    })
  }
  delToken(){
    this.props.delToken();
    this.props.history.push({
      pathname:'/personal'
    })
  }
  render() {
    let { token } = this.props;
    return (
      <div className="login-wrap">
        <p>{token}</p>
        <input type="text" placeholder="输入用户名" />
        <input type="password" placeholder="输入密码" />
        <a href="javascript:void(0)" onClick={this.setToken.bind(this)}>登录</a>
        <a href="javascript:void(0)" onClick={this.delToken.bind(this)}>退出登录</a>
      </div>
    );
  }
}

export default Login;
