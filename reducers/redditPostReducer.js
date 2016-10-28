import  { List } from 'immutable';
import { RECEIVE_POSTS, DELETE_POSTS } from '../actions/redditActions';

const initialState = List();

const redditPostReducer = (state=initialState,action) => {
  switch(action.type){
    case RECEIVE_POSTS:
    console.log("action.data",action.data)
    return List(action.data)

    case DELETE_POSTS:
    console.log("state",state)
    console.log("action.data",action.index)
    return state.delete(action.index)
    default:
    return state;
  }
}


export default redditPostReducer;