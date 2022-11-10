import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      message : 'empty'
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/test').then(response => response.json()).then(msg => {
    console.log(msg);  
    this.setState({message : msg})
    }).catch(err => console.log(err))
  }
  render(){
    return(
      <div className='App'>
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}

export default App