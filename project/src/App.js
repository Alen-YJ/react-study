import React, { Component, Fragment } from 'react'
// import Header from './components/Header'
import List from './components/List'
import './App.css'
// import store from './store/index'


class App extends Component {
  constructor(props){
    super(props)
  }
  render() { 
    return ( 
      <Fragment>
        {/* <Header></Header> */}
        <List></List>
      </Fragment>
     );
  }
}
 
export default App;