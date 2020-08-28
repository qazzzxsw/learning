import React from 'react'
import {NavLink,Route,Redirect} from 'react-router-dom'

class User extends React.Component{
    render(){
        console.log(this)
        return <div>
            <h1>用户中心</h1>
            <NavLink to="/user/money">钱包</NavLink>
            <NavLink to="/user/quan">优惠券</NavLink>
            <Redirect path="/user" to="/user/money"></Redirect>
            <Route path="/user/money" render={()=> <h2>浅爱阿娜</h2>}></Route>
            <Route path="/user/quan" render={()=> <h2>优惠券</h2>}></Route>
        </div>
    }
}
export default User