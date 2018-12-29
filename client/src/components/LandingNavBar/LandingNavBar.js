import React, { Component } from 'react'
import styles from './LandingNavBar.css'

export default class LandingNavBar extends Component {
    constructor(props) {
    super(props)
    this.state = {

    }
}
  render() {
    return (
      <div className={styles.navBarSpacing}>
        <div>
        <p>closetShare</p>
        </div>
        <div>
            <p to='/'>Register</p>
            <p to='/login'></p> 
        </div>
      </div>
    )
  }
}
