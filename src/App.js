import React, { useState, useEffect } from 'react'
import BotCollection from './BotCollection';
// import ListOfBots from './ListOfBots';
import YourBotArmy from './YourBotArmy';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [clickedBots, setClickedBots] = useState([]);

  const clickBots = (bots) => {
    if(!clickedBots.find((clickedBot) => clickedBot.id === bots.id)){
      setClickedBots([...clickedBots, bots])
    }
  };

  const removeBots = (bots) => {
    setClickedBots(clickedBots.filter((clickedBot) => clickedBot !== bots));
  };

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Check the data here
        setBots(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  


  return (
   <div className='container'>
    <h1>Intergalactic Bot Army</h1>
    <BotCollection bots={bots} clickBots={clickBots} removeBots={removeBots}/>
    <YourBotArmy clickedBots={clickedBots} onRelease={removeBots}/>

   </div>

  
  );
}

export default App;
