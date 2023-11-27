import React from "react";

function BotCollection({ bots, onEnlist, onRelease }){
    return(
        <div>
            <h2>Bots</h2>
            {bots.map((bots) => (
                
                    <BotCollection key={bots.id} bots={bots} onEnlist={onEnlist} onRelease={onRelease}/>
            ))}
        </div>
    )

}
export default BotCollection;