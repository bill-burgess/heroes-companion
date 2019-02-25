import React, { Component } from 'react'

const AppBar = require('../components/app-bar')

class App extends Component {

  render () {
    return (
      <div>
        <AppBar {...this.props}/>
      </div>
    )
  }

}

module.exports = App
