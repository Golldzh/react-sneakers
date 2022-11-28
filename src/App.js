import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
      <div className="content p-40">
        <div className="d-flex justify-between">
          <h1 className="mb-40">Все кроссовки</h1>
          <div className="searchBlock">
            <img width = {15} height = {15} src="/img/search.svg" alt="search"/>
            <input type="text"  placeholder="Поиск..."/>
          </div>
        </div>
        <div className="d-flex justify-between">
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
