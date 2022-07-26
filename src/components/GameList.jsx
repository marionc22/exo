import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Game from './Game';


const GameList = () => {
    let [allGames, setAllGames] = useState([]);
useEffect(() => {
  axios
    .get("https://apis.wilders.dev/wild-games/games")
    .then((result) => setAllGames(result.data));
}, []);
console.log(allGames)

const [filtre, setFiltre] = useState (false);

const deleteGame = (id) => {
    setAllGames(allGames.filter(game => {return game.id !== id}))
}


// const jeufiltre = () => {
    
// }
const listefiltre = allGames.filter(jeu => jeu.rating > 4.5);
    return (
        
        <div>
            <button onClick= {()=>setFiltre(!filtre)}>{filtre ? "tous les jeux" : "bonnes notes"} </button>
            {filtre? listefiltre.map((jeu)=> {
               return <div className="vignette" key={jeu.id}>
               <Game deleteGame={deleteGame} id={jeu.id} name = {jeu.name} date={jeu.released} image = {jeu.background_image} note= {jeu.rating}/>
               </div>})  :
            allGames.map((jeu)=> {
               return <div className="vignette" key={jeu.id}>
               <Game deleteGame={deleteGame} id={jeu.id} name = {jeu.name} date={jeu.released} image = {jeu.background_image} note= {jeu.rating}/>
               </div> 
            })} 
                     '   '
        </div>
    );
};

export default GameList;