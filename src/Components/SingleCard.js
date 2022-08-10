import React from "react";
import "./SingleCard.css";

function SingleCard({card , handleChoice}) {

    const handleClick = () => {
        handleChoice(card)
    }

  return (
    <div>
      <div className="card">
        <div>
          <img className="front" src={card.src} alt="card front" />
          <img className="back" src="/img/cover.png" alt="card_back" onClick={handleClick}/>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
