import React from 'react';
import ReactDOM from 'react-dom';

//react中组件名 首字母 必须大写
let str = 'hello'
function Div(props){
    console.log(props)
    let str = 'world'
    return (<div className={props.className123}>
        <h1 className={props.className} style={{color:props.style}}>{str}</h1>
    {props.qqq}
    </div>)
}
function H1(){
    return <h1>111111111</h1>
}

// 在使用组件的时候 写的行内属性 我们可以在函数内部通过props接收
// 凡是 在组件上使用的行内属性 都是自定义属性
// 在原生HTML标签上使用的行内属性 都是react规定的
// 用function生命的组件 我们一般称为 静态组件或者函数式组件
ReactDOM.render(<>
<Div className123='box' id='666' style="red" qqq={str}><H1></H1></Div>
</>,document.getElementById('root'))