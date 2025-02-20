import './App.css';
import ItemList from './ItemList.tsx';

function App() {
  const items = ["Item 1", "Item 2", "Item 3"];
  return (
    <div className="App">
    <ItemList items={items} />
  </div>
  );
}

export default App;
