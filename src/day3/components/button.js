import React from 'react';
console.log(React.PureComponent)

// PureComponent 会自动进行 新老props和state的校验
// 理解成 会自动执行 shouldComponentUpdate // 只会进行一层校验 浅比较
class Button extends React.PureComponent{
      // shouldComponentUpdate(newProps){
    //     // console.log(newProps)
    //     if(this.qqq === newProps.can){
    //         return false
    //     }else{
    //         this.qqq = newProps.can
    //         return true
    //     }
    // }
    render(){
        let {onClick} = this.props;
        return <>
            <button onClick={onClick}>{this.props.children}</button>
        </>
    }
}
export default Button