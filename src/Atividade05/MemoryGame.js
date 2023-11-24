import React, { useState, useEffect } from 'react';
import './MemoryGame.css';

function MemoryGame()
{
    const [flipped, setFlipped] = useState([]);
    const [deck,setDeck] = useState([]);
    const cards = [ 
        <img src='https://i.imgur.com/ZguvcDr.png'/>,
        <img src='https://i.imgur.com/ELxkP7T.png'/>,
        <img src='https://i.imgur.com/c6CLveJ.jpeg'/>,
        <img src='https://i.imgur.com/F8DcIo0.jpeg'/>,
        <img src='https://i.imgur.com/RA8sEXY.jpeg'/>,
        <img src='https://i.imgur.com/225PAZz.jpeg'/>,
        <img src='https://i.imgur.com/cZG6SN6.jpeg'/>,
        <img src='https://i.imgur.com/jNpHDSH.jpeg'/>   ];

    function createDeck()
    {
        const auxDeck = [...cards,...cards].sort(() => Math.random() - 0.5);
        setDeck(auxDeck);
    }

    const cardClick = (index) => {
        if (flipped.length < 2 && !flipped.includes(index)) setFlipped([...flipped, index]);
    };

    useEffect(() => {
        if (flipped.length === 2) {
          const [firstClick, secondClick] = flipped;
          if (deck[firstClick] === deck[secondClick]) {
            const newDeck = deck.slice();
            newDeck[firstClick] = '';
            newDeck[secondClick] = '';
            setDeck(newDeck);
          }
          setTimeout(() => {
            setFlipped([]);
          }, 300);
        }
    }, [flipped, deck]);

    useEffect(()=>{
        createDeck();
    },[]);

    useEffect(() => {
        if (deck.every((element) => element === '')) setTimeout(()=>{createDeck()},500);
    }, [deck]); 
    
    return(
        <div className="body-game">
            <div className="body-card">
                {deck.map((card, index) => (
                    <div
                        key={index}
                        className={`card ${flipped.includes(index) || card === '' ? 'flipped' : ''}`}
                        onClick={() => cardClick(index)}
                    >
                    {flipped.includes(index) || card === '' ? card : <img src='https://i.imgur.com/fyprwPl.jpeg'/>}
                    </div>
                ))}
            </div>
        </div>
    );

};

export default MemoryGame;

