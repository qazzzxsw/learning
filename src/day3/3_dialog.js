import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './components/dialog'

class App extends React.Component{
    state = {
        flag:false
    }
    showFn = ()=>{
        this.setState({
            flag:true
        })
    }
    close = (bol)=>{
        this.setState({
            flag:bol
        })
    }
    ok = ()=>{
        console.log('is ok')
        setTimeout(()=>{
            this.close(false)
        },2000)
    }
    noOk=()=>{
        console.log('no ok')
        this.close(false)
    }
    render(){
        let {flag} = this.state;
        return <div className="">
            <button onClick={this.showFn}>显示dialog</button>
            {flag?
            <Dialog onClose={this.close} onSure={this.ok} onCancel={this.noOk}>
                <header slot="header">dialog</header>
                <p>xxxxxxxxxxxxx</p>
                <p>xxxxxxxxxxxxx</p>
                <p>xxxxxxxxxxxxx</p>
                adsfwetweggq
            </Dialog>:
            null
            }
        </div>
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))