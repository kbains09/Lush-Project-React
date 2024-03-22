import "./ScanBarcode.scss";
import barcode from "../../assets/images/barcode.png";

function ScanBarcode() {
  return (
    <div className="scan">
      <h1>Scan Products</h1>
      <img src={barcode} alt="a barcode" />
      <form action="" className="scan__form">
        <input type="text" placeholder="Search..." />
        <div>
          <input type="text" placeholder="Proudct" />
          <input type="text" placeholder="Quantity" />
        </div>
        <div>
          <button>Confirm</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default ScanBarcode;
