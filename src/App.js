import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import { useEffect, useState } from 'react';

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] =useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('https://6387af4ae399d2e47306151e.mockapi.io/sneakers/items')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });
  }, [])

  const onAddToCart = (obj) => {
     setCartItems([...cartItems, obj]);
  }

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue)
  }
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items = {cartItems} onCartClose = {() => {setCartOpened(false)}}/>}
      <Header onCartClick = {() => {setCartOpened(true)}}/>
      <div className="content p-40">
        <div className="d-flex justify-between">
          <h1 className="mb-40">{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
          <div className="searchBlock">
            <img width = {15} height = {15} src="/img/search.svg" alt="search"/>
            <input onChange={onChangeSearchValue} value={searchValue} type="text"  placeholder="Поиск..."/>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
          .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((obj, index) => (
            
            <Card 
            key = {index}
            onFavorite = {() => {console.log('ok!')}} 
            onAdded = {(obj) => {onAddToCart(obj)}}
            title = {obj.title} 
            price = {obj.price} 
            imgUrl = {obj.imgUrl}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
