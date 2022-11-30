function Drawer(props) {
  return(
    <div onClick={props.onCartClose} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between align-center">Корзина 
          <button className="deleteBtn" onClick={props.onCartCloseClick}>
            <img src="/img/delete.svg" alt="delete"/>
          </button>
        </h2>
        <div className="items">
          <div className="cartItem">
            <img className="mr-20"  width = {70} height = {70}src="/img/sneakers/1.jpg" alt="img"/>
            <div>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <button className="deleteBtn">
              <img src="/img/delete.svg" alt="delete"/>
            </button>
          </div>
          <div className="cartItem">
            <img className="mr-20"  width = {70} height = {70}src="/img/sneakers/1.jpg" alt="img"/>
            <div>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <button className="deleteBtn">
              <img src="/img/delete.svg" alt="delete"/>
            </button>
          </div>
        </div>
        <ul className="cartTotalBlock">
          <li>
            <span>Итого: </span>
            <div></div>
            <b>21 498 руб. </b>
          </li>
          <li>
            <span>Налог 5%: </span>
            <div></div>
            <b>1074 руб. </b>
          </li>
        </ul>
        <button className="greenBtn">
            <span>Оформить заказ</span>
            <img src="/img/arrow.svg" alt="arrow" />
        </button>
      </div>
    </div> 
  )
}
export default Drawer;