import {
  EMPLOYEE_UPDATE
} form '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  swtich (action.type){
    case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload } /// KEY Interpolation
    default:
      return state;
  }
}
