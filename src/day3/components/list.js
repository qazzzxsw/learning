import React from 'react'
import Button from './button'
class List extends React.Component{
    del(n){
        this.props.onDel(n)
    }
    render(){
        let {data=[]} = this.props;
        return <ul className=''>
            {
                data.length?
            data.map((item,index)=><li key={index}>{item} <Button onClick={this.del.bind(this,index)} can="true">X</Button></li>):
            <i>暂无数据</i>
            }
        </ul>
    }
}
export default List