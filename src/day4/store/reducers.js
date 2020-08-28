import * as types from './types'
export function countReducer(state,option){
    //纯函数
    state = state || {count:100,name:'6777'}
    console.log(option)
    switch(option.type){
         case types.ADD:
             return {
                 ...state,
                 count:state.count + option.num
             }
        case types.MINUS:
            return {
                ...state,
                count:state.count - option.num
            }
        default:
            return state;
            break;
    }
}
export function colorReducer(state,option){
    state = state || {color:'red'}
    switch(option.type){
        case types.CHANGE_COLOR:
            return {
                ...state,
                color:option.col
            }
        default:
            return {
                ...state
            }
            break;
    }
}