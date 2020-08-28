import React from 'react'
import './dialog.css'
class Dialog extends React.Component{
    close = (e) =>{
        console.dir(e.target)
        // 加私有属性 解决事件冒泡关闭dialog
        if(e.target.getAttribute('_self')){
            this.props.onClose && this.props.onClose(false)
        }
    }
    sure =()=>{
        this.props.onSure && this.props.onSure()
    }
    cancel = ()=>{
        this.props.onCancel && this.props.onCancel()
    }

    render(){
        let {children} = this.props;
        let header = <header>头部 <button _self="true">X</button></header>;
        let main = '身体';
        let footer = <footer>
            <button onClick={this.sure}>确定</button>
            <button onClick={this.cancel}>取消</button>
        </footer>
        // children 字符窜 对象(节点) 数组(多个字节点或者字符窜等)
        console.log(children)
        //children处理
        if(typeof children === 'string'){
            //文本
            main = children
        }else if(Array.isArray(children)){
            // 数组
            let h = [];
            let m = [];
            let f = [];
            children.forEach(item =>{
                // item 是文本或者节点
                if(typeof item  === 'string'){
                    m.push(item)
                }else{
                    if(item.props.slot === 'header'){
                        h.push(item)
                    }else if(item.props.slot === 'footer'){
                        f.push(item)
                    }else{
                        // 默认将内容放在主体
                        m.push(item)
                    }
                }
            })
            header  = h.length ? h:header;
            main = m.length ? m:main;
            footer = f.length? f:footer;
        }else if(typeof children !== 'undefined'){
            // 单个节点
            switch(children.props.slot){
                case 'header':
                    header = children
                    break;
                case 'footer':
                    footer = children
                    break;
                default:
                    main = children
                    break;
            }
        }

        return <div className='dialog_box' _self="true" onClick={this.close}>
            <div className='box'>
                {header}
                <main>{main}</main>
                {footer}
            </div>
        </div>
    }
}
export default Dialog