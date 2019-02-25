import React, { Component } from 'react'

class AppBar extends Component {

  render () {

    return (
      <div id='appBar' >
        <a href='#'>

        </a>
        <h1
          id='appBarTitle'
          className='appBar'
        >
          Heroes
        </h1>
      </div>
    )
  }

}

module.exports = AppBar
