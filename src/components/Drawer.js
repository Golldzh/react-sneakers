function Drawer({onCartClose, items}) {
  return(
    <div onClick={onCartClose} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between align-center">Корзина 
          <button className="deleteBtn" onClick={onCartClose}>
            <img src="/img/delete.svg" alt="delete"/>
          </button>
        </h2>
        <div className="items">
          {items.map((obj) => (
            <div className="cartItem">
              <img className="mr-20"  width = {70} height = {70}src={obj.imgUrl} alt="img"/>
              <div>
                <p>{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <button className="deleteBtn">
                <img src="/img/delete.svg" alt="delete"/>
              </button>
            </div>
          ))}
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