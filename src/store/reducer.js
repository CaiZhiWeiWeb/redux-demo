import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GETLIST } from "./actionTypes";

const defaultState = {
  inputValue: 'write thing',
  list: []
}

export default function reducer(state = defaultState, action) { //纯函数和传的参有关系
  console.log(state, action);
  switch (action.type) {
    //只能接收state不能改变
    case CHANGE_INPUT:
      return { ...state, ...{ inputValue: action.value } };
    case ADD_ITEM:
      //数组里添加输入的值
      let newAddState = !state.inputValue ? state : { ...state, ...{ list: [...state.list, ...[state.inputValue]] } }
      newAddState.inputValue = ''
      return newAddState
    case DELETE_ITEM:
      let newState = JSON.parse(JSON.stringify(state))
      newState.list.splice(action.index, 1)
      return newState
    case GETLIST:
      return { ...state, ...{ list: [...state.list, ...action.data] } }
    default:
      return state
  }
};
