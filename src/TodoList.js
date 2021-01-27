import React, { Component } from 'react';
import 'antd/dist/antd.css'
import store from './store'
import { changeInputAction, addItemAction, deleteItemAction,getTodoList } from './store/actionCreators';
import TodoListUi from './components/TodoListUi';

class TodoLIst extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }
  changeInputValue(e) {
    store.dispatch(changeInputAction(e.target.value))
  }
  clickbtn() {
    store.dispatch(addItemAction())
  }
  deletItem(index) {
    store.dispatch(deleteItemAction(index))
  }
  storeChange() {
    this.setState(store.getState)
  }

  componentDidMount(){
    store.dispatch(getTodoList())
  }

  render() {
    return (
      <TodoListUi
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickbtn={this.clickbtn}
        list={this.state.list}
        deletItem={this.deletItem}
      />
    );
  }
}

export default TodoLIst;