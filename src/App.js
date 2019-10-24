import React, { Component } from 'react'
import Navigation from './Navigation'
import Banner from './Banner'
import Column from './Column'

import './App.css'

export default class App extends Component {


 render() {
   let columns = <div className="row">
   {this.props.information.map(item => <Column anything={item.title} desc={item.desc} />)}
   </div>

    return (
      <div className="App">
       <Navigation appTitle={this.props.title} />
       <Banner />
       {columns}


      </div>
    )
  }
}

