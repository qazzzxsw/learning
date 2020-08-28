import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    // constructor(){
    //     super();
    //     this.state ={
    //         count:100
    //     }
    // }
    state ={
        count:100,
        name:123
    }
    add(n,e){
        console.log(e.nativeEvent,e.target)
        console.log(this)
        // setState更新数据 大部分是一个异步操作
        // 在原生事件绑定中 或者 定时器中 它是一个同步的
        this.setState({
            count:this.state.count+n
        },function(){
            // 数据更新完成之后触发
            console.log(this.state.count)
        })
    }
    minus(n,e,m){
        console.log(e)
        this.setState({
            count:this.state.count-n-m
        })
    }
    // e是一个复合事件 是react执行的时候合并传递过来的所以在后面
    minus2=(n,e)=>{
        console.log(e)
        this.setState({
            count:this.state.count - n
        })
    }
    over(){
        console.log('over')
    }
    componentDidMount(){
        document.getElementById('qqq').onclick= ()=>{
            this.setState({
                name:666
            })
            console.log(this.state.name)
        }
    }
    render(){
        let {count} = this.state;
        return <div className=''>
            {/* on+事件名 事件名遵循 小驼峰命名 */}
            {/* bind()在函数体绑定this 会重新返回一个函数 */}
            <button onClick={this.add.bind(this,10)}>+10</button>
            <button onClick={this.add.bind(this,100)}>+100</button>
            {/* 使用箭头函数就不用了bind()绑定this了 */}
            <button onClick={(e)=>{this.minus(10,e,20)}}>-</button>
            <button onClick={this.minus2.bind(null,5)}>-5</button>
            <h2 onMouseOver={this.over}>{count}</h2>
            <button id='qqq'>+++</button>
        </div>
    }
}


ReactDOM.render(<App/>,document.getElementById('root'))