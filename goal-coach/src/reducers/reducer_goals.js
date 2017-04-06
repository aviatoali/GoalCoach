import { SET_GOALS } from '../constants';

export default (state = [], action) => { //exporting anonymous arrow fuction with 2 parameters: 1.) a state parameter set to initial empty array because our goals will always be an array as we're making them in the firebase listener in GoalList.jsx and 2.)an action, as usual for a reducer
  switch(action.type){
    case SET_GOALS:
      const { goals } = action;
      return goals;
    default:
      return state;
  }
}
