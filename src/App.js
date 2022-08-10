
import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './Components/SingleCard';

const cardImages = [
  {"src": "/img/helmet-1.png", matched: false},
  {"src": "/img/potion-1.png", matched: false},
  {"src": "/img/ring-1.png", matched: false},
  {"src": "/img/scroll-1.png", matched: false},
  {"src": "/img/shield-1.png", matched: false},
  {"src": "/img/sword-1.png", matched: false}
]

function App() {

  const [cards , setCards] = useState([])
  const [turns , setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo , setChoiceTwo] = useState(null)

  const shuffledCards = () => {
    const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({...card, id:Math.random()}))
    setCards(shuffledCards)
    setTurns(0)
  }

  // console.log(cards , turns)


  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }


  useEffect(() => {
    if (choiceOne && choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        // console.log('They Match')
        setCards(prevCard => {
          return prevCard.map(card => {
            if(card.src === choiceOne.src){
              return {...card , matched:true}
            }else{
              return card
            }
          })
        })
        resetTurn()
      }
      else{
        // console.log('They No Match')
        setTimeout(() => resetTurn() , 1000)
      }
    }
  },[choiceOne, choiceTwo])

  console.log(cards)

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurn => prevTurn +1)
  }


  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffledCards}>New Game</button>

<div className="card-grid">
  {cards.map(card=>(
    <SingleCard key = {card.id} card = {card} handleChoice = {handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched}/>
  ))}
</div>




      
    </div>
  );
}

export default App;
