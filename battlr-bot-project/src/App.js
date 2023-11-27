import React, { useState, useEffect } from 'react'
import './App.css';

function App(bots, onEnlist, onRelease) {
  return(
    <div className='bot-card'>
      <h3>{bots.name}</h3>
      <img src={bots.avatar_url} alt=''/>
      <div className='botActions'>
        <button onClick={() => onEnlist(bots)}>Enlist</button>
        <button onClick={() => onRelease(bots)}>Release</button>
      </div>
    </div>
  )
}

export default App;
