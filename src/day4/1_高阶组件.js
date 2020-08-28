import React from 'react';
import ReactDOM from 'react-dom';



function connect(obj){
    return function(Com){
        class Temp extends React.Component{
            render(){
                return <Com name={obj.name}/>
            }
        }
        return Temp
    }
}
class App extends React.Component{
    // constructor(){
    //     super()
    // }
    render(){
        console.log(this)
        return <div>hahah</div>
    }
}
App = connect({name:'666'})(App)
ReactDOM.render(<App/>,document.getElementById('root'))