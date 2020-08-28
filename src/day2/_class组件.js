import React from 'react';
import ReactDOM from 'react-dom';
console.log(React.Component)

// 在class组建中 我们的结构是通过render函数的返回结果确定的
class App extends React.Component{
    // 创造一个APP类 继承React.ComPonent这个类
    // 在render中 我们不用管是否写了constructor；都可以正常通过this.props调用到我们的属性
    constructor(props){
        // 在class声明类的时候 有一个规定
        // 写了constructor 辟邪super()--->super相当于我们的call，继承super其实就是继承的那个类的函数体本省React.Component
        super(props)
        console.log(props)
    }
    fn(){
        console.log(this.props)
    }
    render(){
        console.log(this.props)
        let aaa = this.props.id;
        // this.props中的属性 是只读对的 不能修改；
        aaa = 1111;
        this.fn()
        return <div>1111111111</div>
    }
}
ReactDOM.render(<App className123='box' id='666' />,document.getElementById('root'))