import React from 'react';
class Input extends React.Component{
    change=(e)=>{
        this.props.onChange(e)
    }
    keydown = (e)=>{
        if(e.keyCode === 13){
            this.props.onEnter(e)
        }
    }
    render(){
        let {value} = this.props;
        return <div>
            <input type="text"
            value={value}
            onKeyDown={this.keydown}
            onChange={this.change}/>
        </div>
    }
}
export default Input