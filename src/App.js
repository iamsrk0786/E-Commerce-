
import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
// import ShoppingCart from './Components/ShoppingCart';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Productcart from './Components/Productcart';


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
<Routes>
  <Route path='/' element={<Card/>}/>
  {/* <Route path='/shoppingcart' element={<ShoppingCart/>}/> */}
  <Route path='/shoppingcart' element={<Productcart/>}/>


      </Routes>
    </Router>
    {/* <Card/> */}
    {/* <ShoppingCart/> */}
    </div>
  );
}

export default App;
