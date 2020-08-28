import React from 'react';
import ReactDOM from 'react-dom';
// 非受控组件  表单不受本组件的数据控制
// 受控组件 表单受本组件的数据控制 表单受组件的数据控制
class App extends React.Component{
    state ={
        name:'666'
    }
    componentDidMount(){
        this.inp.value = this.state.name
    }
    change=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    fn=()=>{
        console.log(this.state.name)
    }
    render(){
        return <div>
            <button onClick={this.fn}>qqq</button>
            <br/>
            <input type='text' ref={(el)=>{this.inp = el}}/>
            <br/>
            <input type="text" value={this.state.name} onChange={this.change}/>
            <h1>{this.state.name}</h1>
        </div>
    }
}
ReactDOM.render(<App/>,document.getElementById('root'))