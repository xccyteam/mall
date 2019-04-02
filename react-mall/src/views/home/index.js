import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Counter from '../../components/Counter.js';
import {test} from '../../api/api';
import './index.less';

@connect(
  state=>({token: state.token})
)

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
    let { token } = this.props;
    return (
      <div className="App">
        <p> token : {token}</p>
        <Counter />
        <Link to="/personal">去个人中心页面</Link>
        <p><Link to="/login">去登陆页面</Link></p>
        <ul>  
            <li></li>
        </ul>
      </div>
    );
  }
}

export default Home;
