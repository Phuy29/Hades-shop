import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { myCart, setOpenSlideCart, setOpenSearch } = useContext(CartContext);
  return (
    <div className="fixed z-[10000] px-14 top-0 w-full bg-white">
      <div className="flex items-center h-[66px]">
        <Link to="/">
          <img
            src="https://theme.hstatic.net/1000306633/1000859591/14/logo.png?v=314"
            alt="logo"
            className="h-7 md:h-[50px] md:pr-8"
          />
        </Link>
        {/* <img
          src="https://file.hstatic.net/1000306633/file/frame_6694338c38af43ed949ac588da62aa56.svg"
          alt=""
          className="ml-2 h-[6px]"
        /> */}

        <ul className="flex justify-start items-center text-10 gap-6 mr-[350px]">
          <li>
            <a href="/collections" title="SHOP ALL">
              SHOP ALL
            </a>
          </li>
          <li>
            <a href="/collections/top" title="TOPS">
              TOPS
            </a>
          </li>
          <li>
            <a href="/collections/bottoms" title="BOTTOMS">
              BOTTOMS
            </a>
          </li>
          <li>
            <a href="/collections/outerwear" title="OUTERWEAR">
              OUTERWEAR
            </a>
          </li>
          <li>
            <a href="/collections/footwear" title="FOOTWEAR">
              FOOTWEAR
            </a>
          </li>
          <li>
            <a href="/collections/hat" title="HAT">
              HAT
            </a>
          </li>
          <li>
            <a href="/collections/sweater-1" title="BAGS">
              BAGS
            </a>
          </li>
          <li>
            <a href="/collections/sale" title="SALE">
              SALE
            </a>
          </li>
          <li>
            <a href="/collections/flash-sale" title="FLASH SALE  12.06.2022🔥">
              FLASH SALE 12.06.2022🔥
            </a>
          </li>
          <li>
            <a href="https://hades.vn/pages/tuyen-dung" title="RECRUITMENT">
              RECRUITMENT
            </a>
          </li>
        </ul>

        <nav>
          <div className="menu flex items-center gap-5 text-10 justify-end uppercase">
            <div className="cursor-pointer">Login / register</div>
            <div className="cursor-pointer" onClick={() => setOpenSearch(true)}>
              Search
            </div>
            <div
              className="cursor-pointer"
              onClick={() => setOpenSlideCart(true)}
            >
              CART ({myCart.length})
            </div>
            <div className="flex uppercase bg-black p-1 text-white items-center">
              EN
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </nav>
      </div>
      {/* <div className="flex justify-between items-center my-1 ">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="flex justify-between items-center mr-2">
          <div className="mr-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div onClick={() => setOpenSlideCart(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
