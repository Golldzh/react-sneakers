function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="unliked"/>
      </div>
      <img width = {133} height = {112} src="/img/sneakers/1.jpg" alt="sneakers" />
      <h5 className="mt-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="mt-15">
          <p>Цена:</p>
          <b>12 999 руб.</b>
        </div>
        <button className="addButton">
          <img src="/img/plus.svg" alt="plus"/>
        </button>
      </div>
    </div>  
  )
}

export default Card;