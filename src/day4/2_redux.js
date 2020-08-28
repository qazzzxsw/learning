import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index'
import Com1 from './components/comp1'
import * as types from './store/types'
console.log(store)
class App extends React.Component{
    add=()=>{
        store.dispatch({
            type:types.ADD,
            num:10
        })
        console.log(store.getState())
    }
    minus =()=>{
        store.dispatch({
            type:types.MINUS,
            num:5
        })
    }
    componentDidMount(){
        // 把这个跟回调函数 放倒某个事件池中
        // 事件池中的函数 会在数据更新之后默认执行
        this.fn = store.subscribe(()=>{
            this.setState({})
        })
        // store.subscribe(()=>{
        //     console.log(111)
        // })
        // store.subscribe(()=>{
        //     console.log(222)
        // })
    }
    componentWillUnmount(){
        // 组件销毁之前 移除事件池中不使用的事件
        this.fn()
    }
    render(){
        return <div className=''>
            <button onClick={this.add}>+</button>
            <button onClick={this.minus}>-</button>
            <h1>数字是:{store.getState().count}</h1>
            <Com1/>
        </div>
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))