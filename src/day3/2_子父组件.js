import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types' // 专门用来处理传进来的数据的情况

//限制传进来的数据的情况
// 一般当我们去创造一些复用性组件的时候才会选择使用限制
// 父组件使用子组件的数据 父组件把一个函数作为props传递给子组件，子组件调用时传递参数给函数 借此实现子传父

class Button extends Component{
    static propTypes = {
        // className:propTypes.string // className 必须是一个字符窜
        className:propTypes.oneOfType([
            propTypes.string,
            propTypes.number
        ])// 满足两个类型条件中的其中一个
        
    }

    // static defaultProps = {
    //     // 给默认值的
    //     className:'more'
    // }
    state = {
        name:'bayd'
    }
    click=()=>{
        this.props.onClick && this.props.onClick() // 事件存在则执行
        this.props.qqq && this.props.qqq(this.state.name)
    }
    render(){
        console.log(this)
        let {className = 'qqq',children='按钮'} = this.props;
        // children 对应的就是 组件标签 包含的所有内容；
        // 有三种情况 字符窜(纯文本) 数组(多个子节点) 对象(单个节点)
        let str = 'hello'
        let arry = ['haha',<i key='123'>hehehe</i>]
        let b = <b>hhhh</b>
        return <button className={className} onClick={this.click}>{children}{str}{arry}{b}</button>
    }
}
// Button.defaultProps = {}   等同于 static defaultProps = {}
class App extends React.Component{
    state = {
        name:'你好',
        className:'box'
    }
    fn(){
        this.setState({
            name:'你好！welcome'
        })
    }
    qqq=(name)=>{
        this.setState({
            name:name
        })
        console.log(this.state.name)
    }
    render(){
        //Button组件就是App组件的子组件 App 就是Button组件的父组件
        let {name,className} = this.state;
        return <div className="">
            <button onClick={()=>{this.fn()}}>addss</button>
            <Button onClick={this.fn.bind(this)}>menu1</Button>
            <Button className={className}>menu2</Button>
            <Button className={666}>menu3</Button>
            <Button>你好<i>haha</i></Button>
            {/*子组件向父组件传参 */}
            <Button qqq={this.qqq}><i>haha</i></Button>
            App根组件：{name}
        </div>
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))