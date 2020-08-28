import * as types from './types'
export function todoReducer(state ={
    list:['xxxeeeedddd']
},option){
    switch(option.type){
        case types.TODO_REMOVE:
        // state.lsit.splice(option.data,1)
            return {
                ...state,
                list:state.list.filter((item,index)=> index !== option.data)
            }
        case types.TODO_ADD:
            // state.list.push(option.data)
            return {
                ...state,
                list:state.list.concat(option.data)
            }
        default:
            return {
                ...state
            }
        break;
    }
}
export function colorReducer(state={color:'red'},option){
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