/**
 * Created by ginugopinath on 29/01/17.
 */
import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action){
  switch (action.type){
    case types.CREATE_COURSE:
      return [...state, Object.assign({}, action.course)];
    default :
      return state;
  }
}
