// import React from 'react'
// import ReactDom from 'react-dom'


class Element{
    constructor(type,props,children){
        this.type = type;
        this.props = props || {};
        this.children = children
    }
    // 将大写字母处理成‘-’+小写字母
    fn(str){
        return str.replace(/[A-Z]/g,function(a){
            return '-'+a.toLowerCase()
        })
    }
    render(){
        // this.type i p h1 div
        let ele = document.createElement(this.type)
        // 遍历props div.setAttribute('class','box)
        Object.keys(this.props).forEach(key =>{
            switch(key) {
                // 处理 class
                case 'className':
                    ele.setAttribute('class',this.props[key])
                    break;
                case 'style':
                    let str =''
                    Object.keys(this.props[key]).forEach(item => {
                        // item color fontSize-> font-size
                        // this.props[key] {color:'red',fontSize:'18px'}
                        str += `${this.fn(item)}:${this.props[key][item]}`
                    })
                    ele.setAttribute('style',str)
                    break;
                case 'htmlFor':
                    ele.setAttribute('for',this.props[key])
                    break;
                default:
                    ele.setAttribute(key,this.props[key])
                    break;
            }
        })

         // 处理子节点
         this.children.forEach(item => {
            // item都是儿子 儿子可能是字符窜
            // item若是Element这个类的一个实例(对象)，但是我们要的是真实的DOM
            // 实例可以通过render方法执行产生真实的DOM
            // 如果是字符窜 需要转成 文本节点 document.createTextNode()
            item instanceof Element?
            ele.appendChild(item.render()):
            ele.appendChild(document.createTextNode(item))
        })
        return ele;
    }
}

let React = {
    createElement(type,props,...children){
        return new Element(type,props,children)
    }
}

let ReactDom = {
    render(ele,container){
        //ele是Element的一个实例； 插入的需要是真实的DOM
        container.appendChild(ele.render())
    }
}


let ele = React.createElement('div',{id:'box',className:'box',style:{color:'red',fontSize:'18px'}},"哈哈还是",
              React.createElement('i',null,"呵呵"),
              React.createElement('p',null,'hello',React.createElement('b',null,'666'))
              )
// 虚拟DOM 就是用JS对象去模拟真实DOM树
console.log(ele)   

ReactDom.render(ele,document.querySelector('#root'))