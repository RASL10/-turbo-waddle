import React, { Component } from 'react';
import styles from './App.css'
import People from './people/People'

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      showGranda: false
    }
  }

  toggleGranda = () => {
    this.setState({showGranda: !this.state.showGranda})
  }

  render() {
    // const granda = this.props.people.filter(i => i.name === 'Granda').map(({name}) => name)
    // console.log(this.props)
    
    return (
      <div >
      <div className={styles.font} onClick={this.toggleGranda} >
        Let's try something
        </div>
        <People />
        </div>
    );
  }
}

export default App

