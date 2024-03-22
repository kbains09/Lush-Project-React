import ScanBarcode from "../../components/ScanBarcode/ScanBarcode";
import "./CheckoutPage.scss";
import CheckoutActions from "../../components/CheckoutActions/CheckoutActions";
import PurchasesList from "../../components/PurchaseList/PurchaseList";

function CheckoutPage() {
  return (
    <main>
      <ScanBarcode />
      <PurchasesList />
      <CheckoutActions />
    </main>
  );
}

export default CheckoutPage;
