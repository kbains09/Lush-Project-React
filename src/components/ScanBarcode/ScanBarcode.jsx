import "./ScanBarcode.scss";
import barcode from "../../assets/images/barcode.png";

function ScanBarcode() {
  return (
    <div className="scan">
      <div className="scan__container">
        <h1 className="scan__title">SCAN PRODUCTS</h1>
        <img src={barcode} alt="a barcode" className="scan__img" />
        <form action="" className="scan__form">
          <input
            type="text"
            placeholder="SEARCH PRODUCT..."
            className="scan__search"
          />
          <div className="scan__container2">
            <input
              type="text"
              placeholder="SELECTED PRODUCT"
              className="scan__product"
            />
            <input type="text" placeholder="QUANTITY" className="scan__qty" />
          </div>
          <div className="scan__container3">
            <button className="scan__btn-confirm">CONFIRM</button>
            <button className="scan__btn-cancel">CANCEL</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ScanBarcode;
