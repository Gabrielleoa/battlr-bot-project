import React from "react";
import ListOfBots from "./ListOfBots";

function YourBotArmy({ clickedBots, onRelease }) {
    return(
        <div className="yourbotarmy">
            <h2>Intergalactic Army</h2>
            {clickedBots.map((bots) => (
                <ListOfBots key={bots.id} bots={bots} onRelease={onRelease}/>
            ))}
        </div>
    )
}