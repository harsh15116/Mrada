import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Screens/Home';
import Login from './components/Screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from "./components/Screens/Signup";
import { CartProvider } from './components/ContextReducer.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import MyOrder from './components/Screens/MyOrder';


function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
           
            <Route exact path="/creatuser" element={<Signup />} />
            <Route exact path="/myOrder" element={<MyOrder/>} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
