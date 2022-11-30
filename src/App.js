import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import { useEffect, useState } from 'react';

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://6387af4ae399d2e47306151e.mockapi.io/sneakers/items')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });
  }, [])

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onCartClose = {() => {setCartOpened(false)}}/>}
      <Header onCartClick = {() => {setCartOpened(true)}}/>
      <div className="content p-40">
        <div className="d-flex justify-between">
          <h1 className="mb-40">Все кроссовки</h1>
          <div className="searchBlock">
            <img width = {15} height = {15} src="/img/search.svg" alt="search"/>
            <input type="text"  placeholder="Поиск..."/>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-between ">
          {items.map((obj) => (
            <Card title = {obj.title} price = {obj.price} imgUrl = {obj.imgUrl}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
