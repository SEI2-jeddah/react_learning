import React, { Component } from 'react'
import Navigation from './Navigation'
import Banner from './Banner'

import './App.css'

export default class App extends Component {


 render() {
    return (
      <div className="App">
       <Navigation appTitle={this.props.title} />
       <Banner />
      </div>
    )
  }
}

