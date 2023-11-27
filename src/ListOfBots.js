import React from "react";
const ListOfBots = ({ bots, onEnlist, onRelease }) => {
  return (
    <div className="bot-card">
      <h3>{bots.name}</h3>
      <img src={bots.avatar_url} alt={bots.name} />
      <div className="bot-actions">
        <button onClick={() => onEnlist(onEnlist)}>Enlist</button>
        <button onClick={() => onRelease(onRelease)}>Release</button>
      </div>
    </div>
  );
};

export default ListOfBots;