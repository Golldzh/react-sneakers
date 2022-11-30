import { useState } from "react";
import React from "react";

function Card(props) {

  const [isAdded, setIsAdded] = useState(false);

  const onClickAdded = () => {
    setIsAdded(!isAdded);
  }



  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="unliked"/>
      </div>
      <img width = {133} height = {112} src={props.imgUrl} alt="sneakers" />
      <h5 className="mt-15">{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="mt-15">
          <p>Цена:</p>
          <b>{props.price} руб.</b>
        </div>
        <button className={isAdded ? 'addedButton' : 'addButton'} onClick={onClickAdded}>
          <img src={isAdded ? '/img/added.png' : '/img/unadded.svg'} alt="plus"/>
        </button>
      </div>
    </div>  
  )
}

export default Card;