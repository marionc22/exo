import React from 'react';


const Game = (props) => {

  
    return (
        <div>
         <h1>{props.name}</h1>
           <img src={props.image} alt="jeu illustration" width="200px" />
           <p>{props.date}</p>
           <p>{props.note}</p>
           <button className='delete-game' onClick={() => props.deleteGame(props.id)}>Supprimer</button>
        </div>
    );
};

export default Game;