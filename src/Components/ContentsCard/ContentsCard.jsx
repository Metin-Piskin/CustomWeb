import React, { useEffect, useState } from "react";

import "./ContentsCard.css";

const ContentsCard = ({ imageSrc, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const timeoutCardId = setTimeout(() => {
      setShowCard(true);
    }, 100);
    return () => {
      clearTimeout(timeoutCardId);
    };
  }, []);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className={`FirstCard ${showCard ? "visible" : ""}`}>
      <div
        className={`card ${isFlipped ? "flipped" : ""}`}
        onClick={handleCardFlip}
      >
        <div className="card-front">
          <div className={`cardInner  ${showCard ? "visible" : ""} `}>
            <img className="ContentsCardImg" src={imageSrc} alt={title} />
            <h2 className="ContentsCardTitle">{title}</h2>
          </div>
        </div>
        <div className="card-back">
          <p className="ContentsCardDescription">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentsCard;
