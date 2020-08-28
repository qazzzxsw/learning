import React from 'react';
// import logo from '../logo.svg'
import '../App.css';


//函数式组件
function App(){
    // jsx 在js文件中编写html
    // 返回值 只能有一个根元素这个根元素可以是一个空标签
    // css类名 必须是className
    // 在react的html结构中编写变量 需要使用{变量或者表达式 执行函数也可以：fn()}
    // {}中：这里不能直接写对象，但是可以写数组
    // 行内样式 需要是一个 style = {对象}

    let a = 'welcome to react';
    let obj = {aa:123};
    let sty = {color:'red'};
    let ary = [1,2,3,4,5,<i key={1}>哈哈哈</i>]
    let ary2 = [{name:'小红'},{name:'小兰'},{name:'小明'},{name:'小孟'}]
     function fn(arr){
        var temp = []
        for(let i =0; i< arr.length; i++){
        temp.push(<li key={i}>{arr[i].name}</li>)
        }
        return temp;
     }
     let ary3 = ary2.map((item,index) =>{
         // 最好的key就是这条数据的一个唯一的id
        return <li key={index}>{item.name}</li>
     })
     let col = 'green'
     let clas = 'box2'
    return (
        <>
        <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <h2 className={"box " +clas}>{a}</h2>
    <h2 style={sty}>{a}</h2>
    <h2 style={sty}>{obj.aa}</h2>
    <h2 style={{color:'blue'}}>this is a style</h2>
    <h2 style={{color:col}}>this is a style</h2>
    <h2>{ary}</h2>
    <ul>{fn(ary2)}</ul>
    <ul>{ary3}</ul>
    <ul>
        {
            ary2.map(item => <li key={item.name}>{item.name}</li>)
        }
    </ul>
    <input type="checkbox" id="box"/>
    <label htmlFor="box">click</label>
        </>
    )
}
export default App;
