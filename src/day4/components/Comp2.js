import React from 'react';
import {connect} from 'react-redux'
class Comp2 extends React.Component{
    render(){
        console.log(this)
        return <div style={{color:this.props.col}}>
            {this.props.qqq}
        </div>
    }
}
Comp2 = connect((state)=>{
    return {
        ...state,
        qqq:state.count.count,
        col:state.color.color,
    }
})(Comp2)
export default Comp2