import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

// const composeEnhancers = window.__Redux__DEVTOOLS ? //做增强函数
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)



export default store