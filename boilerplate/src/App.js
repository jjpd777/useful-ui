import logo from './logo.svg';
import './App.css';
import TableExample from "./Components/Table";
import SideSheetExample from "./Components/SideSheet";
import ItemsBasket from "./Components/ItemsBasket/index";

function App() {
  return (
    <div className="App">
      <div className="content-chunk">
        <TableExample/>
      </div>
      <div className="content-chunk">
      <SideSheetExample/>
      </div>
      <div className="content-chunk">
        <ItemsBasket/>
      </div>
    </div>
  );
}

export default App;
