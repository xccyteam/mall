import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './index.less';

class Index extends Component {
  render() {
    return (
      <div className="index-wrap">
        <p>我是个人中心页面</p>
        <Link to="/">去首页</Link>
      </div>
    );
  }
}

export default Index;
