import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component{
    render(){
        return <button>hh</button>
    }
}
class App extends React.Component{
    constructor(){
        super();
        this.www = React.createRef()
    }
    fn=()=>{
        console.log(document.getElementsByClassName('qqq')[0])
        console.log(this.refs.qqq)
        console.log(this.qqq)
        console.log(this.www.current)
        console.log(this.btn)
    }
    /** 
     * ref不能获取函数式组件；
     * ref ='xxx' this.refs.xxx  这种方式后期将要被废弃
     * ref={(el)=>{this.xxx = el}} this.xxx
     * this.xxx = React.createRef() this.xxx.current
    */
   render(){
       return <div>
           <button onClick={this.fn}>获取</button>
           <h1 className='qqq' ref='qqq'>hello</h1>
           <h1 className='qqq' ref={(el)=>{this.qqq = el}}></h1>
           <h1 ref={this.www}>hello</h1>
           <Button ref={this.www}></Button>
       </div>
   }
}
ReactDOM.render(<App/>,document.getElementById('root'))