import React from 'react';
import {connect} from 'react-redux'
class List extends React.Component{
    del(n){
        this.props.dispatch({type:'TODO_REMOVE',data:n})
    }
    render(){
        let {list,col}= this.props
        return <ul>
            {
                list.map((item,i)=><li key={item} style={{color:col}}>{item} <button onClick={()=>{this.del(i)}}>X</button></li>)
            }
        </ul>
    }
}


let List123 = connect((state)=>{
    return {
        list:state.todo.list,
        col:state.color123.color
    }
},(dispatch)=>{
    return {dispatch}
})(List)
export default List123