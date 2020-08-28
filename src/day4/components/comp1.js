import React, { Component } from 'react';
import store from '../store/index'
class Comp1 extends React.Component{
    render(){
        return <div>
            <h1>组件的数字是{store.getState().count}</h1>
        </div>
    }
}
export default Comp1