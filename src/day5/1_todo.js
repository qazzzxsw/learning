import React from 'react'
import ReactDom from 'react-dom'
import List from './components/list'
import Input from './components/input'
// import {Provider,connect} from 'react-redux'
import {Provider,connect} from  './store/myreactRedux'
import store from './store'

class App extends React.Component{
    state ={
        todo:''
    }
    change=(e)=>{
        this.setState({
            todo:e.target.value
        })
    }
    submit=()=>{
        // 提交 清空input
        this.setState({
            todo:''
        })
        this.props.dispatch({type:'TODO_ADD',data:this.state.todo})
    }
    colfn = ()=>{
        this.props.dispatch((dispatch)=>{
            setTimeout(()=>{
                dispatch({type:'CHANGE_COLOR',col:'blue'})
            },2000)
        })
    }
    render(){
        let {todo} = this.state
        return <div>
            <button onClick={this.colfn}>换颜色</button>
            <Input  value={todo} onChange={this.change} onSubmit={this.submit}/>
            <List></List>
        </div>
    }
}
App = connect((state)=>{
    return {}
},(dispatch)=>{
    return {
        dispatch
    }
})(App)

ReactDom.render(<Provider store={store}><App/></Provider>,document.getElementById('root'))