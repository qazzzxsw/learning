import React from 'react'
class Input extends React.Component{
    keydown =(e)=>{
        if(e.keyCode == 13){
            this.props.onSubmit()
        }
    }
    render(){
        let {value,onChange} = this.props
        return <div>
            <input type='text' value={value} onChange={onChange} onKeyDown={this.keydown}/>
        </div>
    }
}
export default Input