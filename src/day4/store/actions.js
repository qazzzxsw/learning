import * as types from './types'
export function add(n){
    return {type:types.ADD,num:n}
}
export function minus(n){
    // action  是obj return {}
    // 使用thunk中间件后可以返回函数
    return function (dispatch,getState){
        console.log(getState())
        setTimeout(()=>{
            dispatch({type:types.MINUS,num:n})
        },3000)
    }
}