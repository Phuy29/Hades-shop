import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";

const ProductCard = ({ id, name, price, imageUrl }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { setMyCart, setTotal } = useContext(CartContext);
  const handleClick = () => {
    setIsAdded(true);
    const newItem = {
      name: name,
      price: price,
      imageUrl: imageUrl,
    };
    setMyCart((item) => [...item, newItem]);
    setTotal((total) => {
      total += price;
    });
  };

  return (
    <div className="text-center cursor-pointer">
      <div className="relative group">
        <div className="">
          <img src={imageUrl} alt="" />
        </div>
        <div className="gap-3 absolute bottom-3 w-full flex opacity-0 group-hover:opacity-100 transition-all ease-in duration-500 group-hover:animate-slideDown">
          <div className="ct-button">Buy now</div>
          {isAdded ? (
            <div className="ct-button opacity-50">Added</div>
          ) : (
            <div className="ct-button" onClick={handleClick}>
              Add to card
            </div>
          )}
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
