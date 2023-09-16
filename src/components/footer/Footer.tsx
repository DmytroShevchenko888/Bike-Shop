import { getImageUrl } from "../../helpers/getImageUrl";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <div className="mail-section">
        <div className="container">
          <div className="content">
            <h2>subscribe for a new updates</h2>
            <div className="mail-section__content">
              <input type="email" placeholder="E-mail" />
              <button className="standart-btn">Submit</button>
            </div>
            <div className="agreement-box">
              <input className="checkbox" type="checkbox" name="" id="" />
              <label>I agree to the consent for personal data.</label>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="container">
          <div className="content">
            <div className="footer-section__content">
              <div className="content-logo">
                <div className="logo">
                  <img src={getImageUrl("global", "bikelogo.svg")} alt="logo" />
                </div>
                <p>
                  The World-bikes company specializes in the sale of cycling
                  products.
                </p>
              </div>
              <div className="content-grid">
                <div className="content-1">
                  <h3>Catalog</h3>
                  <p>Trade-in</p>
                  <p>Bicycles</p>
                  <p>Parts</p>
                  <p>Equipment</p>
                  <p>Accessories</p>
                  <p>Bike trainer</p>
                </div>
                <div className="content-2">
                  <h3>Info</h3>
                  <p>About us</p>
                  <p>Shipping and payment</p>
                  <p>Blog</p>
                  <p>Contacts</p>
                  <p>Workshop</p>
                  <p>Storage</p>
                  <p>Warranty</p>
                </div>
                <div className="content-3">
                  <h3>Contacts</h3>
                  <div className="item-1">
                    <img src={getImageUrl("footer", "phone.svg")} alt="phone" />
                    <div>
                      <p>+380(67)111-22-33</p>
                      <p>+380(63)111-22-33</p>
                    </div>
                  </div>
                  <div className="item-2">
                    <img
                      src={getImageUrl("footer", "location.svg")}
                      alt="phone"
                    />
                    <p>city Dnipro Glinka street, 2</p>
                  </div>
                  <div className="item-3">
                    <img src={getImageUrl("footer", "mail.svg")} alt="phone" />
                    <div>
                      <p>alexseva94@gmail.com</p>
                      <p>dmytro.shevchenko08@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="agreement">
              <p>© 2023 WORLD BIKE</p>
              <p>User Agreement</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
