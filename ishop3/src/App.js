import Shop from './components/Shop';


import itemsArr from './items.json';

var shopName = "Tech Shop"

function App() {
  return (
    <Shop name={shopName} items={itemsArr} />
  );
}

export default App;
