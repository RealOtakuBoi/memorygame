
import { useState } from 'react';
import './App.css';
import SingleCard from './Components/SingleCard';

const cardImages = [
  {"src": "/img/helmet-1.png"},
  {"src": "/img/potion-1.png"},
  {"src": "/img/ring-1.png"},
  {"src": "/img/scroll-1.png"},
  {"src": "/img/shield-1.png"},
  {"src": "/img/sword-1.png"}
]

function App() {

  const [cards , setCards] = useState([])
  const [turns , setTurns] = useState(0)

  const shuffledCards = () => {
    const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({...card, id:Math.random()}))
    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards , turns)


  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffledCards}>New Game</button>

      {/* <div className="card-grid">
        {cards.map((card) => {
          <div className='card' key={card.id}>
            <div>
              <img src={card.src} alt="front" />
              <img src='/img/cover.png' alt="front" />
            </div>
          </div>
        })}
      </div> */}

<div className="card-grid">
  {cards.map(card=>(
    <SingleCard key = {card.id} card = {card} />
  ))}
</div>




      
    </div>
  );
}

export default App;
