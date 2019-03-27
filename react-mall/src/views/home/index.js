import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Test from '../../components/test.js';
import {test} from '../../api/api';
import './index.less';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      students:[]
    };
  }
  getUserInfo(){
    test().then(res => {
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
        <Test></Test>
        <p>
          hello world
        </p>
        <Link to="/personal">去个人中心页面</Link>
        <ul>  
            {  
                this.state.students.map(function(item, index){  
                    return <li key={index}>{item.author}</li>  
                })  
            }  
        </ul>
      </div>
    );
  }
}

export default App;
