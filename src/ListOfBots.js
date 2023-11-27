import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const ListOfBots = ({ bots, onEnlist, onRelease }) => {
  return (
    <div className="bot-card">
      <h3>{bots.name}</h3>
      <img src={bots.avatar_url} alt={bots.name} />
      <div className="bot-actions">
        <button type='button' class='btn btn-success'onClick={() => onEnlist(onEnlist)}>Enlist</button>
        <button type='button' class='btn btn-danger' onClick={() => onRelease(onRelease)}>Release</button>
        
      </div>
    </div>
  );
};

export default ListOfBots;