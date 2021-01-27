import { CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GETLIST } from './actionTypes';
import axios from 'axios';

export const changeInputAction = (value) => ({
  type:CHANGE_INPUT,
  value
})

export const addItemAction = () => ({
  type:ADD_ITEM
})

export const deleteItemAction = (index) => ({
  type:DELETE_ITEM,
  index
})

export const getListAction = (data) => ({
  type:GETLIST,
  data
})
//中间件
export const getTodoList = ()=>{
  return (dispatch)=>{
    axios.get('https://www.fastmock.site/mock/b7b50ff246861168bb69ac525a0b52c7/shop/reduxlist').then(res=>{
      dispatch(getListAction(res.data.list))
    })
  }
}