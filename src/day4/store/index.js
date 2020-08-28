import {createStore,combineReducers,applyMiddleware} from 'redux'
import {countReducer, colorReducer} from './reducers'
import thunk from 'redux-thunk'
// combineReducers 可以把多个reducer合并成一个
let rootReducer = combineReducers({
    count:countReducer,
    color:colorReducer
})
// let store = createStore(countReducer)
let store = createStore(rootReducer,applyMiddleware(thunk))
// thunk可以让dispath方法执行传递的action支持函数形式 action默认是obj
console.log(store.getState())
export default store