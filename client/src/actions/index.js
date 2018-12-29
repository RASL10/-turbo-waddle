import { FETCH_PEOPLE, ADD_PERSON } from './types'
import axios from 'axios'

const apiUrl = 'http://localhost:5000/api/people'

export const createPerson = ({ name, age }) => {
    return (dispatch) => {
      return axios.post(`${apiUrl}/add`, {name, age})
        .then(response => {
          dispatch(createPersonSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  
  export const createPersonSuccess =  (data) => {
    return {
      type: ADD_PERSON,
      payload: {
        name: data.name,
        age: data.age
      }
    }
  }


export const fetchPeople = (people) => {
    return {
      type: FETCH_PEOPLE,
      people
    }
  };
  
  export const fetchAllPeople = () => {
    return (dispatch) => {
      return axios.get(apiUrl)
        .then(response => {
          dispatch(fetchPeople(response.data))
        })
        .catch(error => {
          throw(error)
        })
    }
  }