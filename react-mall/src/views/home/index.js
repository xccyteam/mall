import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import  Counter from '../../components/counter.js';
import {test} from '../../api/api';
import './index.less';

class Home extends Component {
  constructor(props){
    super();
    this.state = {
      students:[]
    };
  }
  getUserInfo(){
    test().then(res => {
      console.log(res)
      if(res.status === 200){
        this.setState({students: res.data });
      }
    }).catch(err =>{
      console.log(err)
    })
  }
  componentDidMount(){
    this.getUserInfo();
  }
  render() {
    return (
      <div className="App">
        <Counter />
        <Link to="/personal">去个人中心页面</Link>
        <ul>  
            <li></li>
        </ul>
      </div>
    );
  }
}

export default Home;
