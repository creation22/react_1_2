import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0) 
  const addvalue= () => {
    if(counter<20 ){
      counter = counter + 1 ; 
      setCounter(counter)
    }
    else {
      return ; 
    }


    
  }
  const subvalue= () => {
    if(counter >-20){
      counter = counter- 1; 
      setCounter(counter)
    }
    else {
      return ; 
    }
  }
  return (
    <>
     
      <h1>Chai aur react</h1>
      <h2>Counter value :{counter}</h2>
      <button onClick={addvalue}>Add value</button> 
      <br/><br/>  
      <button onClick={subvalue}>Remove value</button>     
      
    </>
  )
}

export default App
