import * as c from "./../actions/ActionTypes";

export default (state = false , action) => {
  switch(action.type) {
    case c.EDIT_TOGGLE:
      return !state;
    default:
      return state;
  }
}