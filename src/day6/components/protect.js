import React from 'react';
import {Route,Redirect} from 'react-router-dom'
//函数式
function fn(bol,props,Comp){
    console.log(props,Comp)
    return !bol?<Comp {...props}></Comp> : <Redirect to="/login"></Redirect>
}
//  react 中没有vue那样的路由守卫 所以需要自己封装一个组件在组件进行类似的操作
class Protect extends React.Component{
    render(){
        let bol = localStorage.getItem('wwww')
        let {component:Comp,level,...others} = this.props
        console.log(others,Comp)
        // 4就是用户的level
        let userLevel  = 4;
        return <>
        {
            bol&&level <= userLevel ?
            <Route component={Comp} path={this.props.path}></Route>:
            <Redirect to="/login"></Redirect>
        }
        </>
    }

}
export default Protect