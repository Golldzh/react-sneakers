
function App() {
  return (
    <div className="wrapper clear">
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
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="d-flex justify-between">

          <div className="card">
            <img width = {133} height = {112} src="/img/sneakers/1.jpg" alt="sneakers" />
            <h5 className=" mt-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
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

          <div className="card">
            <img width = {133} height = {112} src="/img/sneakers/2.jpg" alt="sneakers" />
            <h5 className=" mt-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
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

          <div className="card">
            <img width = {133} height = {112} src="/img/sneakers/3.jpg" alt="sneakers" />
            <h5 className=" mt-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
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

          <div className="card">
            <img width = {133} height = {112} src="/img/sneakers/4.jpg" alt="sneakers" />
            <h5 className=" mt-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
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
        </div>
      </div>
    </div>
  );
}

export default App;
