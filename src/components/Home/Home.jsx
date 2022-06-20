import { Link } from "react-router-dom";
import ProductList from "../Collections/ProductList";
import Footer from "../Footer/Footer";

const Home = ({ allPros }) => {
  return (
    <>
      <section className="bg-[url(https://theme.hstatic.net/1000306633/1000859591/14/slideshow_3.jpg?v=329)] bg-cover bg-no-repeat bg-bottom h-[854px] relative top-0 right-0 left-0 "></section>
      <section className="p-2 w-full flex justify-between gap-x-2">
        <Link to="/collections">
          <img
            src="https://theme.hstatic.net/1000306633/1000859591/14/block_home_category1_new.png?v=329"
            alt=""
          />
        </Link>
        <Link to="/collections">
          <img
            src="https://theme.hstatic.net/1000306633/1000859591/14/block_home_category2_new.png?v=329"
            alt=""
          />
        </Link>
        <Link to="/collections">
          <img
            src="https://theme.hstatic.net/1000306633/1000859591/14/block_home_category3_new.png?v=329"
            alt=""
          />
        </Link>
      </section>

      <section>
        <img
          src="https://theme.hstatic.net/1000306633/1000859591/14/show_block_home_category_image_3_new.png?v=329"
          alt=""
        />
      </section>

      <section className="px-14">
        <ProductList allPros={allPros} />
      </section>

      <section className="bg-black px-16 py-14 gap-x-[30px] flex justify-between items-center text-white">
        <div>
          <img
            src="https://file.hstatic.net/1000306633/article/blog2_a408af0a74e345288398890b15519188_large.jpg"
            alt=""
          />
          <div className="text-12 font-light mt-5">Thứ Ba 16,03,2021</div>
          <div className="text-20 mt-2 font-semibold">
            Hades - Một Trong Những "Phát Súng Đầu Tiên" của Vietnamese
            Streetwear
          </div>
          <div className="mt-2 text-14">
            Ra đời từ những năm cuối thế kỷ 20, streetwear là phong cách thời
            trang phổ biến của cộng đồng đam mê bộ môn skateboard. Dù mới “bén
            duyên” với giới...
          </div>
          <div className="text-14 mt-3">Xem thêm...</div>
        </div>
        <div>
          <img
            src="https://file.hstatic.net/1000306633/article/blog1_34f17ec315f84ac5986dd663c509666a_large.jpg"
            alt=""
          />
          <div className="text-12 font-light mt-5">Thứ Ba 16,03,2021</div>
          <div className="text-20 mt-2 font-semibold">
            Hades Streetwear Đồng Hành Cùng "Highshool Best Dance Crew"
          </div>
          <div className="mt-2 text-14">
            Tiếp tục thực hiện sứ mệnh "lan toả phong cách sống tích cực tới thế
            hệ trẻ", Hades chính thức nhận lời mời đồng hành cùng High School
            Best Dance...
          </div>
          <div className="text-14 mt-3">Xem thêm...</div>
        </div>
        <div>
          <img
            src="https://file.hstatic.net/1000306633/article/blog2_a408af0a74e345288398890b15519188_large.jpg"
            alt=""
          />
          <div className="text-12 font-light mt-5">Thứ Ba 16,03,2021</div>
          <div className="text-20 mt-2 font-semibold">
            Hades - Một Trong Những "Phát Súng Đầu Tiên" của Vietnamese
            Streetwear
          </div>
          <div className="mt-2 text-14">
            Ra đời từ những năm cuối thế kỷ 20, streetwear là phong cách thời
            trang phổ biến của cộng đồng đam mê bộ môn skateboard. Dù mới “bén
            duyên” với giới...
          </div>
          <div className="text-14 mt-3">Xem thêm...</div>
        </div>
      </section>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
