import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/list'
import Input from './components/input'

class App extends React.Component{
    state = {
        todo:'',
        data:[]
    }
    change =(e)=>{
        this.setState({
            todo:e.target.value
        })
    }
    submit=()=>{
        this.setState({
            data:this.state.data.concat(this.state.todo),
            todo:''
        })
    }
    del=(n)=>{
        console.log(n)
        this.setState({
            data:this.state.data.filter((item,index)=> index !== n)
        })
    }
    render(){
        let {todo,data} = this.state;
        return <div>
            {todo}
            <Input value={todo} onEnter={this.submit} onChange={this.change}/>
            <List data={data} onDel={this.del}/>
        </div>
    }
}
ReactDOM.render(<App/>,document.getElementById('root'))