//Provider组件         connect高阶函数
import React from 'react'
import types from 'prop-types'

//Provider负责 接收store并且创造上下文
//Provider 现在是一个真正的根组件 在它的身上创造上下文 所有的组件能获取到

export class Provider extends React.Component{
    static childContextTypes = {
        store:types.object
    }
    getChildContext(){
        return {
            store:this.props.store
        }
    }
    render(){
        return <>
        {this.props.children}
        </>
    }
}

export function connect(mapStateToProps,mapDispatchToProps){
    return function(Com){
        return class Temp extends React.Component{
            static contextTypes = {
                store:types.object
            }
            constructor(props,context){
                super(props,context)
                console.log(props,context)
                let data = context.store.getState()
                //通过 上下文 获取 根组件设置的store属性
                this.state = mapStateToProps(data)
                //就把mapStateToPorps的返回结果变成这个临时组建的私有状态
            }
            componentDidMount(){
                this.qqq = this.context.store.subscribe(()=>{
                    //数据更新 是redux数据更新了 但是state的数据没有更新
                    let data = this.context.store.getState()
                    console.log(data)
                    this.state = mapStateToProps(data)
                    //以上两行代码 是state中的数据更新了
                    console.log(this.state)
                    //更新视图
                    this.setState(this.state) 
                    // this.setState({})
                    //写空对象 我们之前是 吧state中的某个数据更改了 可以这样写
                    //但是现在是整个state的替换 用空对象的时候react还是用自己缓存的老对象合并的
                })
            }
            componentWillUnmount(){
                //有多少组件使用了 connect 那么就有多少事件放到事件池中
                //我们不能一直存 不移除 可以用subscribe返回的回调函数执行的方式移除
                this.qqq()
            }
            render(){
                let disObj = mapDispatchToProps && mapDispatchToProps(this.context.store.dispatch)
                return <Com {...this.state} {...disObj}/>
            }
        }   
    }
}