import { useState } from "react";
import React from "react";

function Card({imgUrl, title, price, onAdded}) {

  const [isAdded, setIsAdded] = useState(false);

  const onClickAdded = () => {
    setIsAdded(true);
    !isAdded && onAdded({title, price, imgUrl});
  }


  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="unliked"/>
      </div>
      <img width = {133} height = {112} src={imgUrl} alt="sneakers" />
      <h5 className="mt-15">{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="mt-15">
          <p>Цена:</p>
          <b>{price} руб.</b>
        </div>
        <button className={isAdded ? 'addedButton' : 'addButton'} onClick = {onClickAdded}>
          <img src={isAdded ? '/img/added.png' : '/img/unadded.svg'} alt="plus"/>
        </button>
      </div>
    </div>  
  )
}

export default Card;