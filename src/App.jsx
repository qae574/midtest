import React from 'react'
import Head from './Head/Head'
import './App.css'  
import Ask from './Head/Ask'
import Mid from './MidBody/Mid'

const App = () => {
  return (
    <div>
     <div className="header"> <Head /></div> 
     <div className="akser"> <Ask /></div> 
     <div className="middel"> <Mid /></div> 
    </div>
  )
}

export default App