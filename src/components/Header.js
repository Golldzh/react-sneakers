function Header() {
  return (
    <header className="d-flex justify-between align-center">
        <div className="headerLeft d-flex align-center">
          <img width = {40} height = {40} src="/img/logo.png" alt="logo"/>
          <div className="headerInfo">
          <h3>REACT SNEAKERS</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight d-flex">
          <li className="d-flex align-center">
          <img width = {18} height = {18} src="/img/cart.svg" alt="cart"/>
            <span>1205 руб.</span>
          </li>
          <li>
          <img width = {18} height = {18} src="/img/like.svg" alt="like"/>
          </li>
          <li>
          <img width = {18} height = {18} src="/img/user.svg" alt="user"/>
          </li>
        </ul>
      </header>
  ) 
}
export default Header;