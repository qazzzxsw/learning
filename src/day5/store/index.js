// import {createStore,combineReducers,applyMiddleware} from 'redux'
import {createStore,combineReducers,applyMiddleware} from './myredux'
// import thunk from 'redux-thunk'
import {thunk} from './mythunk'
import {todoReducer,colorReducer} from './reducers'

let rootReducer = combineReducers({
    todo:todoReducer,
    color123:colorReducer
})

let store = createStore(rootReducer,applyMiddleware(thunk))
console.log(store.getState())
export default store