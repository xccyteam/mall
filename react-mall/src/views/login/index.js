import React, { Component } from "react";
import { connect } from 'react-redux';
import "./index.less";
import { setToken, delToken } from '../../redux/actions'
import { token } from '../../api/api';

@connect(
    state=>({token: state.token}),
    { setToken, delToken }
)

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      username: '',
      password: ''
    }
  }
  setToken(){
    token(this.state).then(res => {
      const resData = res.data;
      if(resData.status == 200){
        this.props.setToken(resData.data);
      }
    }).catch(err => {
      console.log(err)
    })
    // this.props.setToken('456');
    // this.props.history.push({
    //   pathname:'/personal'
    // })
  }
  delToken(){
    this.props.delToken();
    this.props.history.push({
      pathname:'/personal'
    })
  }
  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
 }
  render() {
    let { token } = this.props;
    let { username, password } = this.state;
    return (
      <div className="login-wrap">
        <p>{token}</p>
        <input type="text" placeholder="输入用户名" name="username" value={username} onChange={this.handleChange} />
        <input type="password" placeholder="输入密码" name="password" value={password} onChange={this.handleChange} />
        <a href="javascript:void(0)" onClick={this.setToken.bind(this)}>登录</a>
        <a href="javascript:void(0)" onClick={this.delToken.bind(this)}>退出登录</a>
      </div>
    );
  }
}

export default Login;
