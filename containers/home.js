import React, { Component } from 'react'
import App from './app'


class Home extends Component {

  render () {
    return (
      <div>
        <App {...this.props}/>
      </div>
    )
  }

}

module.exports = Home
