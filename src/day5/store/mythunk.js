export function thunk(store){
    return function(dispatch){
        // 返回新的dispatch
        return function(action){
            if(typeof action  === 'function'){
                return action(dispatch,store.getState)
            }
            dispatch(action)
        }
    }
}
export const logger = store=>dispatch=>action=>{
    console.log('老数据',store.getState())
    dispatch(action) //更改数据
    console.log('新数据',store.getState())
}