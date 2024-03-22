import "./ScanBarcode.scss";
import barcode from "../../assets/images/barcode.png";
import { Link } from "react-router-dom";

function ScanBarcode() {
  return (
    <div className="scan">
      <div className="scan__container">
        <h1 className="scan__title">SCAN PRODUCTS</h1>
        <img src={barcode} alt="a barcode" className="scan__img" />
        <form action="" className="scan__form">
          <input
            type="text"
            placeholder="Search for a product"
            className="scan__search"
          />
          <div className="scan__container2">
            <input
              type="text"
              placeholder="Selected Product"
              className="scan__product"
            />
            <input
              type="text"
              placeholder="Quantity"
              className="scan__quantity"
            />
          </div>
          <div className="scan__container3">
            <button className="scan__btn-confirm">CONFIRM</button>
            {/* direct to home page */}
            <Link to="/" className="scan__btn-cancel">
              CANCEL
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ScanBarcode;
