import React,{useState} from 'react';
import ReactDOM from 'react-dom';

//useState 是react的一个hook;react hook 就是为了丰富 函数式组件的功能
// 想在函数式组件中使用 类似于 类组件的state; 我们需要借助useState这个hook
// let[变量名，更改变量的函数的名字] = useState('变量对应的初始值)
// function App(){
//     // let count = 100;
    
//     let [count,setCount] = useState(10000)
//     let [name,setName] = useState('哈哈')
//     function add(){
//         let t = count +10;
//         setCount(t) //更新count 并触发视图更新等同于{setState({count:t})}
//         console.log(count)
//     }
//     function minus(){
//         let t = count -10;
//         setCount(t)
//     }
//     console.log(count,setCount)
//     return <div>
//         <button onClick={add}>+</button>
//         <button onClick={minus}>-</button>
//         <h1>{count}</h1>
//         <button onClick={()=>{setName('哈哈哈嘿嘿')}}>change</button>
//         <h2>{name}</h2>
//     </div>
// }

function App(){
    let [state,setState] = useState({
        count:100,
        name:'哈哈'
    })
    function add(){
        let t = state.count +10;
        let obj = {
            ...state,
            count:t
        }
        setState(obj)
    }
    function minus(){
        let t = state.count - 10;
        setState({
            ...state,
            count:t
        })
    }
    function setName(){
        // 如果只改state中一个属性会导致其他属性置空，这个更改是整个替换
        setState({
            ...state,
            name:'哈哈哈嘿嘿'
        })
    }
    return <div>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
        <h1>{state.count}</h1>
        <button onClick={setName}>change</button>
        <h2>{state.name}</h2>
    </div>
}

ReactDOM.render(<App/>,document.getElementById('root'))