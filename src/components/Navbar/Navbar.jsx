import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center h-[66px] justify-between">
      <Link to="/">
        <img
          src="https://theme.hstatic.net/1000306633/1000859591/14/logo.png?v=314"
          alt="logo"
          className="h-[30px] pr-8"
        />
      </Link>
      <div>
        <ul class="flex justify-start items-center text-[10px] gap-6 mr-[400px]">
          <li>
            <a class="font-oswald" href="/collections" title="SHOP ALL">
              SHOP ALL
            </a>
          </li>
          <li class="">
            <a class="font-oswald" href="/collections/top" title="TOPS">
              TOPS
            </a>
          </li>
          <li class="">
            <a class="font-oswald" href="/collections/bottoms" title="BOTTOMS">
              BOTTOMS
            </a>
          </li>
          <li class="">
            <a
              class="font-oswald"
              href="/collections/outerwear"
              title="OUTERWEAR"
            >
              OUTERWEAR
            </a>
          </li>
          <li class="">
            <a
              class="font-oswald"
              href="/collections/footwear"
              title="FOOTWEAR"
            >
              FOOTWEAR
            </a>
          </li>
          <li class="">
            <a class="font-oswald" href="/collections/hat" title="HAT">
              HAT
            </a>
          </li>
          <li class="">
            <a class="font-oswald" href="/collections/sweater-1" title="BAGS">
              BAGS
            </a>
          </li>
          <li class="">
            <a class="font-oswald" href="/collections/sale" title="SALE">
              SALE
            </a>
          </li>
          <li class="">
            <a
              class="font-oswald"
              href="/collections/flash-sale"
              title="FLASH SALE  12.06.2022🔥"
            >
              FLASH SALE 12.06.2022🔥
            </a>
          </li>
          <li class="">
            <a
              class="font-oswald"
              href="https://hades.vn/pages/tuyen-dung"
              title="RECRUITMENT"
            >
              RECRUITMENT
            </a>
          </li>
        </ul>
      </div>
      <nav>
        <div className="menu flex items-center gap-5 text-14 justify-end">
          <Link to="/">Home</Link>
          <Link to="/collections">Shop all</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
