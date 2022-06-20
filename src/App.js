import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Collections from "./components/Collections/Collections";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "./components/Context/CartContext";
import SlideCart from "./components/SlideCart/SlideCart";
import Search from "./components/Search/Search";

function App() {
  const [allPros, setAllPros] = useState([]);

  const [myCart, setMyCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [openSlideCart, setOpenSlideCart] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    async function getData() {
      const res = await axios.get("/v1/products");
      return res;
    }
    getData().then((res) => setAllPros(res.data));
    getData().catch((err) => console.log(err));
  }, []);

  return (
    <CartContext.Provider
      value={{
        myCart,
        setMyCart,
        total,
        setTotal,
        openSlideCart,
        setOpenSlideCart,
        openSearch,
        setOpenSearch,
      }}
    >
      <Router>
        <div className="wrapper">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home allPros={allPros} />} />
            <Route
              path="/collections"
              element={<Collections allPros={allPros} />}
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <SlideCart />
          <Search />
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
