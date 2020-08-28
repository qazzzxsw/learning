import React from 'react';
import ReactDOM from 'react-dom';

// react的组件 只有两个数据源 一个是属性props;一个是状态state
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // 当前组件的私有属性
            name:'珠峰',
            time:new Date().toLocaleString()
        }
        this.aaa = 123;
    }
    // 想让视图更新 react规定 需要顶用setState这个方法；
    // 换句话说就是setState可以触发视图更新 也就是让render函数执行；
    // 在render中 不能写setState 这个方法执行会 触发死循环
    componentDidMount(){
        // 当组件的DOM渲染完成之后 会触发这个函数
        setInterval(_ =>{
            this.setState({
                time:new Date().toLocaleString()
            })
        },1000);
    }

    render(){
        // 使用解构取值更方便
        let {className} = this.props;
        let {name,time} = this.state;
        return <div className={className}>
            <h1>{name}</h1>
            <h2>{this.aaa}</h2>
            <h2>{time}</h2>
        </div>
    }
}
ReactDOM.render(<App className='box'/>,document.getElementById('root'))