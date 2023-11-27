import React from "react";
import ListOfBots from "./ListOfBots";

function YourBotArmy({ clickedBots, onRelease }) {
    return(
        <div className="yourbotarmy">
            {clickedBots.map((bots) => (
                <ListOfBots key={bots.id} bots={bots} onRelease={onRelease}/>
            ))}
        </div>
    )


}
export default YourBotArmy;