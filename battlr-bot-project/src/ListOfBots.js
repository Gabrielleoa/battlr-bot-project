import React from "react";

function ListOfBots(bots, onEnlist, onRelease){
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

export default ListOfBots;