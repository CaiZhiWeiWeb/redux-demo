import React from 'react';
import { Input, Button, List } from 'antd';

const TodoListUi = (props) => {
  return (
    <div>
      <div className='search'>
        <Input placeholder={props.inputValue} value={props.inputValue} style={{ width: '250px' }} onChange={(e) => props.changeInputValue(e)} />
        <Button type='primary' onClick={() => props.clickbtn()}>增加</Button>
      </div>
      <div className="list" style={{ margin: '10px', width: '300px' }}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (<List.Item onClick={() => props.deletItem(index)}>{item}</List.Item>)}
        >
        </List>
      </div>
    </div>
  )
}


export default TodoListUi;