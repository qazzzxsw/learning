import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component{
    state = {
        todo:'',
        list:[]
    }
    change = (e)=>{
        this.setState({
            todo:e.target.value
        })
    }
    keydown = (e)=>{
        console.log(e.keyCode)
        if(e.keyCode === 13){
            // 回车
            this.setState({
                list:this.state.list.concat(this.state.todo),
                todo:''
            })
        }
    }
    del(n){
        console.log(n)
        this.setState({
            list:this.state.list.filter((item,index)=> index !== n)
        })
    }
    render(){
        let {todo,list} = this.state;
        return <div>
            <input type="text" value={todo} onChange={this.change} onKeyDown={this.keydown}/>
            <ul>
                {
                    list.map((item,index)=> <li key={item}>{item} <button onClick={()=>{this.del(index)}}>X</button></li>)
                }
            </ul>
        </div>
    }
}
ReactDOM.render(<App/>,document.getElementById('root'))