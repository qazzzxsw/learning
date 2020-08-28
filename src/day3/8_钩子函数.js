import React from 'react';
import ReactDOM from 'react-dom';

// 钩子函数 其实就是react在执行的时候 某个对应的阶段 执行某个对应的函数
class Page1 extends React.Component{
    state ={
        time:new Date().toLocaleString()
    }
    componentDidMount(){
        this.timer = setInterval(()=>{
            this.setState({
                time:new Date().toLocaleString()
            })
        },1000)
    }
    componentWillUnmount(){
        console.log('page1销毁')
        clearInterval(this.timer)
    }
    render(){
        let {time} = this.state;
    return <h1>page1 {time}</h1>
    }
}
class Page2 extends React.Component{
    componentWillUnmount(){
        console.log('page2销毁')
    }
    render(){
        return <h1>page2</h1>
    }
}
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            name:'123',
            type:'page1'
        }
    }
    static getDerivedStateFromProps(props,state){
        // 主要目的是为了把props中的属性 合并到state中
        // props就是从父组件传进来的数据
        // state就是自己的数据
        // 这个函数必须返回一个对象
        console.log(props,state)
        return{
            ...props,
            aaa:1234
        }
    }
    componentWillMount(){
        // DOM渲染完成之前执行 将要被废弃的一个钩子函数
        this.state.name = 9999
        console.log(this.state.name)
    }
    componentWillReceiveProps(newProps){
        // 当父组件传进来的props更新的时候 会触发这个函数 后期要被废除
        console.log(111,newProps)

    }
    shouldComponentUpdate(newProps,newState){
        // 这个钩子函数可以用来控制 组件是否更新
        // 返回值若是一个false 则当前组件 不会更新
        // 可以用来提升 组件的渲染效率 是一个用来优化的钩子函数
        console.log(newProps,newState)
        return true
    }
    componentDidMount(){
        // DOM渲染完成之后执行的钩子函数
        // 操作DOM（echarts 百度地图。。。。）
        // 发送ajax请求
    }
    componentWillUnmount(){
        // 组件销毁前触发
        // 一般用来清除事件或者定时器
    }
    fn=()=>{
        this.setState({
          name:"zhufeng666"
        })
    }
      render() {
        // console.log(this.state)
        let {type} = this.state
        return <div className=''>
            <button onClick={this.fn}>====</button>
            {this.state.name}
            <button onClick={()=>{this.setState({type:'page1'})}}>page1</button>
            <button onClick={()=>{this.setState({type:'page2'})}}>page2</button>
            {
              type == 'page1'?
              <Page1/>:
              <Page2/>
            }
        </div>;
    }
}

ReactDOM.render(<App box='qqq'/>,document.getElementById('root'))