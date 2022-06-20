import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const ProductCard = ({ id, name, price, imageUrl }) => {
  const { setMyCart, setTotal, setOpenSlideCart } = useContext(CartContext);
  const handleClick = () => {
    const newItem = {
      id: id,
      name: name,
      price: price,
      imageUrl: imageUrl,
    };
    setMyCart((item) => {
      const newCart = [...item, newItem];

      return newCart;
    });
    setTotal((total) => {
      total += price;
    });
    setOpenSlideCart(true);
  };

  return (
    <div className="text-center cursor-pointer">
      <div className="relative group">
        <div>
          <img src={imageUrl} alt="" />
        </div>
        <div className="gap-3 absolute bottom-3 w-full flex opacity-0 group-hover:opacity-100 transition-all ease-in duration-500 group-hover:animate-slideDown">
          <div className="ct-button">Buy now</div>
          <div className="ct-button" onClick={handleClick}>
            Add to card
          </div>
        </div>
      </div>
      <div className="mt-[15px]">
        <p className="text-12 font-semibold">{name}</p>
        <p className="text-14 mt-2">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
