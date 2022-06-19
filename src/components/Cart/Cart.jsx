import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const { myCart, total, setMyCart, setTotal } = useContext(CartContext);
  const navigate = useNavigate();
  const handleClear = () => {
    setMyCart([]);
    setTotal(0);
  };
  const handleBackHome = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="px-[80px] py-10 border-slate-500 border w-[600px]">
        <div className="uppercase text-center text-20 mb-8">Cart</div>
        {myCart.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex gap-3 py-3 my-4 border-b border-slate-300">
                <img
                  src={item.imageUrl}
                  alt=""
                  className="h-[112px] border border-slate-300"
                />
                <div className="w-[300px] ml-3 pt-12">
                  <p>{item.name}</p>
                  <p className="mt-5 text-gray-400 text-16">{item.price}₫</p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex justify-between mt-6">
          <div className="uppercase text-20">Total</div>
          <div>{total}</div>
        </div>
        <div className="mt-7">
          <button className="ct-button" onClick={handleClear}>
            Thanh toán
          </button>
        </div>
      </div>
      <div className="mt-7">
        <button className="uppercase" onClick={handleBackHome}>
          Return Home →
        </button>
      </div>
    </div>
  );
};

export default Cart;
