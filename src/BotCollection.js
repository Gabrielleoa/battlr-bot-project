import React from "react";
import ListOfBots from "./ListOfBots";

function BotCollection({ bots, onEnlist, onRelease }){
    return(
        <div>
            <h2>Bots</h2>
            {bots.map((bots) => (
                
                    
                    <ListOfBots key={bots.id} bots={bots} onEnlist={onEnlist} onRelease={onRelease}/>
            ))}
        </div>
    )

}
export default BotCollection;