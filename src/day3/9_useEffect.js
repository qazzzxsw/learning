import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
// useState 是为了让函数式组件使用setState 
// useEffect 是为了让函数式组件使用 钩子函数
function App(){
    let [count,setCount] = useState(100)
    let [name,setName] = useState('哈哈哈')
    // useEffect 类似于componentDidMount和componentDidUpdate的一个结合体
    // 可以通过第二个参数 来决定 当前的这个回调函数 什么时候执行
    useEffect(()=>{
        console.log('count',count)
    },[count])
    useEffect(()=>{
        console.log('name',name)
    },[name])
    useEffect(()=>{
        console.log('all',name,count)
    },[]) // 若传递一个空数组，name只在初次加载的时候执行

    return <div>
        <button onClick={setCount.bind(null,count+1)}>change</button>
        <h1>{count}</h1>
        <button onClick={()=>{setName('哈哈哈嘿嘿')}}>修改名字</button>
        <h2>{name}</h2>
    </div>
}
ReactDOM.render(<App/>,document.getElementById('root'))