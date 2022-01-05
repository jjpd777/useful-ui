import './App.css';
import ItemsBasket from "./Components/ItemsBasket/index";
import Installments from "./Components/Installments/index";

function App() {
  return (
    <div className="App">
      <div className="content-chunk">
        <ItemsBasket/>
      </div>
      <div className="content-chunk">
        <Installments/>
      </div>
    </div>
  );
}

export default App;
