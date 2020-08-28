import React from 'react';
import ReactDOM from 'react-dom';
import {Provider,connect} from 'react-redux'
import store from './store'
import Com2 from './components/Comp2'
import {add,minus} from './store/actions'

class App extends React.Component{
    add=()=>{
        this.props.dispatch(add(12))
        this.props.dispatch({type:'CHANGE_COLOR',col:'gold'})
    }
    minus=()=>{
        this.props.dispatch(minus(3))
        this.props.dispatch({type:'CHANGE_COLOR',col:'blue'})
    }
   render(){
       console.log(this)
       let {count,add,minus} = this.props;
       return <div>
           <button onClick={add}>+</button>
           <button onClick={minus}>-</button>
           <button onClick={this.add}>+</button>
           <button onClick={this.minus}>-</button>
           <h1>{count}</h1>
           <Com2/>
       </div> 
   }
}

App = connect((state)=>{
// state就是我们redux的那个数据对象 redux的store提供的
return {
    aaa:1234,
    count:state.count.count
}
},(dispatch)=>{
// dispatch 就是redux的store提供的dispatch
    return{
        add(){
            dispatch({type:'ADD',num:10})
        },
        minus(){
            dispatch({type:'MINUS',num:5})
        },
        dispatch
    }
})(App)
ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>,document.getElementById('root'))