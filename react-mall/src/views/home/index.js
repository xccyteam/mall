import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Test from '../../components/test.js';
import {test} from '../../api/api';
import './index.less';

class App extends Component {
  getUserInfo(){
    test({}).then(res => {
      console.log(res);
    })
  }
  componentDidMount(){
    console.log('请求ing。。。')
    this.getUserInfo();
  }
  render() {
    return (
      <div className="App">
        <Test></Test>
        <p>
          hello world
        </p>
        <Link to="/personal">去个人中心页面</Link>
      </div>
    );
  }
}

export default App;
