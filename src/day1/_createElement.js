import React from 'react'; // 每一个组件都需要引入 babel编译时需要调用react中的createElement方法所以要引入
import ReactDom from 'react-dom'
import './demo.less'

// let h = <h2 className='box'>this is jsx demo</h2>
// babel编译后
// let h = React.createElement('h2',{className:'box'},'this is jsx demo')



// let ele = <div id='box'>
//     哈哈
//     <i>嘿嘿</i>
//     <p>hello <b>6666</b></p>
// </div>
let ele = React.createElement('div',{id:'box'},'哈哈',React.createElement('i',null,'嘿嘿'),React.createElement('p',null,'hello',React.createElement('b',null,'666')))
// 虚拟dom 就是用js对象去模拟真实
console.log(ele) 
ReactDom.render(ele,document.querySelector('#root'))