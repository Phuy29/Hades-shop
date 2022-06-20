import { DiJsBadge } from "react-icons/di";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex justify-between gap-x-4 mx-24 my-14">
          <div className="">
            <div className="text-13 uppercase font-semibold mt-3">
              HADES STORE SYSTEM
            </div>
            <div className="text-12 font-light mt-5">
              <p>
                Hades FLAGSHIP STORE: 69 QUANG TRUNG STREET, GO VAP DISTRICT,
                HOCHIMINH.
              </p>
              <p>
                Store 2: 26 LY TU TRONG STREET, DISTRICT 1, HOCHIMINH (THE NEW
                PLAYROUND).
              </p>
              <p>
                Store 3: 350 DIEN BIEN PHU STREET, WARD 7, BINH THANH DISTRICT,
                HOCHIMINH (G-TOWN).
              </p>
              <p>Store 4: 4 PHAM NGU LAO STREET, DISTRICT 1, HOCHIMINH.</p>
              <p>
                Store 5: 136 NGUYEN HONG DAO STREET, TAN BINH DISTRICT,
                HOCHIMINH.
              </p>
              <p>Store 6: VINCOM SHOPHOUSE, BIEN HOA.</p>
              <p>Store 7: FLOOR 7 - BLOCK B2 - VINCOM BA TRIEU, HANOI.</p>
            </div>
          </div>

          <div>
            <div className="text-13 uppercase font-semibold mt-3">POLICY</div>
            <div className="text-12 font-light mt-5">
              <p>- Website usage policy</p>
              <p>- Payment Options</p>
              <p>- Returns & Exchanges</p>
              <p>- Shipping Services</p>
              <p>- Terms of Service</p>
              <p>- Shopping Guide</p>
              <p>- Privacy Policy</p>
            </div>
          </div>

          <div>
            <div className="text-13 uppercase font-semibold mt-3">
              CONTACT INFO
            </div>
            <div className="text-12 font-light mt-5">
              <p>
                - HADES COMPANY LIMITED Add: 45 Phan Chu Trinh, Ben Thanh, Q1,
                Ho Chi Minh City
              </p>
              <p>- Hotline: 02873011021 (10h -18h)</p>
              <p>- Date granted: 20/07/2020</p>
              <p>- Recruitment: hr@hades.vn</p>
              <p>- Website: hades.vn</p>
              <p>- Customer care: support@hades.vn</p>
              <p>- For business: contact@hades.vny</p>
            </div>
          </div>

          <div>
            <div className="text-13 uppercase font-semibold mt-3">
              FOLLOW US ON SOCIAL MEDIA
            </div>
            <div className="mt-6 opacity-80">
              <DiJsBadge />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
