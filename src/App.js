import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// import axios from "axios";
import Home from "./components/Home/Home";
import Collections from "./components/Collections/Collections";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import { CartContext } from "./components/Context/CartContext";
import SlideCart from "./components/SlideCart/SlideCart";
import Search from "./components/Search/Search";
import Product from "./components/Product/Product";

const products = [
  {
    id: 1,
    name: "FERNERY HOODIE",
    price: "690,000",
    imageUrl:
      "https://product.hstatic.net/1000306633/product/fernery_hoodie_46443437c268478781d5b0c76de0c5b8_grande.jpg",
  },
  {
    id: 2,
    name: "SUBURB POLO",
    price: "450,000",
    imageUrl:
      "https://product.hstatic.net/1000306633/product/polo_car_t_137c87a46ff6459e9935e1c35a07c0ad_grande.jpg",
  },
  {
    id: 3,
    name: "ABNORMAL TEE",
    price: "420,000",
    imageUrl:
      "https://product.hstatic.net/1000306633/product/a_tee_207ee1e3df7d429988053ce8b7589688_grande.jpg",
  },
  {
    id: 4,
    name: "METAL MINI BAG",
    price: "380,000",
    imageUrl:
      "https://product.hstatic.net/1000306633/product/bag_mini_4_1150c98f3cd24e79a72b0eb2bebfd585_grande.jpg",
  },
  {
    id: 5,
    name: "MINUTE BAG",
    price: "380,000",
    imageUrl:
      "https://product.hstatic.net/1000306633/product/vertical_polo_d40bc2342d7d4e1695892a7d69426bc7_grande.jpg",
  },
  {
    id: 6,
    name: "VERTICAL POLO SHIRT",
    price: "450,000",
    imageUrl:
      "https://product.hstatic.net/1000306633/product/balo_d33395ba10704ca7ac7ad787af8ea5d9_grande.jpg",
  },
  {
    id: 7,
    name: "LAGOM BACKPACK",
    price: "670,000",
    imageUrl:
      "https://product.hstatic.net/1000306633/product/z3479452050043_54dbd0fb0a1f136521ab4f0e2be843a0__1__da9a090e8b084a9fb6796b65233c34c7_grande.jpg",
  },
  {
    id: 8,
    name: "DUALITY POLO",
    price: "450,000",
    imageUrl:
      "https://product.hstatic.net/1000306633/product/duality_polo_63e10618c3a24e63b2a06044eeecd09a_grande.jpg",
  },
];

function App() {
  const [allPros, setAllPros] = useState([]);

  const [myCart, setMyCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [openSlideCart, setOpenSlideCart] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  // useEffect(() => {
  //   async function getData() {
  //     const res = await axios.get("/v1/products");
  //     return res;
  //   }
  //   getData().then((res) => setAllPros(res.data));
  //   getData().catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    setAllPros(products);
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
            <Route path="/product" element={<Product />} />
          </Routes>
          <SlideCart />
          <Search />
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
