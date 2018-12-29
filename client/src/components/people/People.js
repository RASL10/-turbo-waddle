import React, { Component } from 'react'
import styles from './people.css'
import {connect} from 'react-redux'
import {createPerson} from '../../actions/index'
// import newPerson from '../../containers/newPerson'

class People extends Component {
    constructor (props) {
      super(props) 
      this.state ={ 
        name: '',
        age: ''
      }

    }

    updateNameValue = (evt) => {
      this.setState({name: evt.target.value})
    }

    updateAgeValue = (evt) => {
      this.setState({age: evt.target.value})
    }

    handleSubmit = () => {
      this.props.onAddPerson(this.state);
    }
    


  render() {
    const people = this.props.people.map(({name, age, id}) => {
      return (
        <div key={id}>
          <span >{name}:</span><span >{age}</span> 
        </div>
      )
    })

    return (
      <div className={styles.inputDiv}>
        <form onSubmit={this.handleSubmit}>
            <span>Name</span>
            <input name='name' value={this.state.name} onChange={this.updateNameValue}></input>
            <br/>
            <span>Age</span>
            <input name='age' value={this.state.age} onChange={this.updateAgeValue}></input>
            <br/>
            <button>Submit</button>
        </form>
        {people}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPerson: person => {
      dispatch(createPerson(person));
    }
  }
}

const mapStateToProps = state => {
  return {
    people: state.people
  }
}


export default connect(
  mapStateToProps, mapDispatchToProps
)(People);
