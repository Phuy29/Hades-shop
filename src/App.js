import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Collections from "./components/Collections/Collections";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "./components/Context/CartContext";

function App() {
  const [allPros, setAllPros] = useState([]);
  const [myCart, setMyCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function getData() {
      const res = await axios.get("/v1/products");
      return res;
    }
    getData().then((res) => setAllPros(res.data));
    getData().catch((err) => console.log(err));
  }, []);

  return (
    <CartContext.Provider value={{ myCart, setMyCart, total, setTotal }}>
      <Router>
        <div className="wrapper">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/collections"
              element={<Collections allPros={allPros} />}
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
