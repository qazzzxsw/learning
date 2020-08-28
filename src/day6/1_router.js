import React,{useState,useEffect} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,HashRouter,Link,NavLink,Route,Switch,Redirect} from 'react-router-dom'
import Protect from './components/protect'
// BrowserRouter 利用的是H5 history api;对比VUE就是history默认是popState
// HashRouter 利用的是hashChange 对比VUE就是hash模式 
// 项目中 我们需要使用 这两个组件中的一个 把 根组件包起来
// Link 相当于 VUE中的router-link 用来跳转对应（to属性跟的值）路径
// NavLink 用法等于 Link;比Link多了一个类名 可以设置选中效果
// Route 相当于 Vue的router-view 用来展示对应的路径 对应的那个组件
// Switch 用这个组件把 用到的Route包起来，可以避免react每一个Route都去匹配的情形
// 子路由 属于哪个组件的子路径  就在哪个组建中编写Link和Route
// 在react中 我们可以使用search或者是params的方式进行参数传递
//  若是search的方式我们可以通过 location.search 或者this.props.location.search
// 若是params 我们需要在编写Route组件的时候 /xxx/:属性名 ，调用的时候 我们通过this.props.match.params接收参数

// import Home from './components/home'
// import User from './components/user'
// react中的路由懒加载 插件 react-loadable
// import Loadable from 'react-loadable'

// let Home  = Loadable({
//     loader:()=> import('./components/home.js'),
//     loading:()=> <h3>正在加载</h3>
// })

// let User  = Loadable({
//     loader:()=> import('./components/user.js'),
//     loading:()=> <h3>正在加载</h3>
// })
// loadable 原理实现
// 函数式组件形式
// function myloadable(obj){
//     let {loader,loading:Loading} = obj;
//     let Bar = null
//     return function Temp(){
//         let [Bar,setBar] = useState(null)
//         let [flag,setFlag] = useState(false)
//         useEffect(()=>{
//             //加载要引入的组件 home 、user
//             loader().then(data=>{
//                 console.log(data)
//                 Bar = data.default 
//                 setFlag(true)
//             })
//         },[])
//         console.log(Bar)
//         return <>
//             {
//                 flag?
//                 <Bar></Bar>:
//                 <Loading></Loading>
//             }
//         </>
//     }
// }

// class组件形式
function myloadable(obj){
    let {loader,loading:Loading} = obj
    return class Temp extends React.Component{
        state = {
            Bar:null
        }
        componentDidMount(){
            loader().then(data=>{
                this.setState({
                    Bar:data.default
                })
            })
        }
        render(){
            let {Bar} = this.state
            return <>
            {
                Bar?
                <Bar {...this.props}/>:
                <Loading></Loading>
            }</>
        }
    }
}


let Home = myloadable({
    loader:()=> import('./components/home'),
    loading:()=><h3>正在加载</h3>
})
let User = myloadable({
    loader:()=>import('./components/user'),
    loading:()=><h3>正在加载</h3>
})

// let Temp = ()=><h1>哈哈哈哈</h1>

class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div>
            <Link to="/home/111">首页</Link>
            <Link to="/user">用户</Link>
            <NavLink to="/home">首页</NavLink>
            <NavLink to="/user?qqq=123&www=123">用户</NavLink>
            <Switch>
                {/* <Route path="/" exact Component={Temp}></Route> */}
                {/* exact是精确匹配的意思 只有当前路径 与 path的值完全相等的时候才行 */}
                {/* 当前路径s若是/，则重定向到 /home */}
                <Redirect path="/" exact to="/home"></Redirect>
                <Protect path="/home/:qqq" component={Home} level="3"></Protect>
                {/* <Route path="/home" component={Home} ></Route> */}
                <Route path="/user" component={User} level="3"></Route>
                <Route path="/*">404</Route>
            </Switch>
        </div>
    }
}


ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'))