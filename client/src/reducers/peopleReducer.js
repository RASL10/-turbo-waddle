import { FETCH_PEOPLE, ADD_PERSON } from '../actions/types';

export default function peopleReducer(state = [], action) {
  switch (action.type) {
    case ADD_PERSON:
      return [...state, action.payload];
    // case DELETE_POST:
    //   return state.filter(post => post._id !== action.payload.id);
    case FETCH_PEOPLE:
      return action.people;
    default:
      return state;
  }
}