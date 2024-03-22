import "./CheckoutPage.scss";
import CheckoutActions from "../../components/CheckoutActions/CheckoutActions";
import PurchasesList from "../../components/PurchaseList/PurchaseList";

function CheckoutPage() {
  return (
    <main>
      <h1>Checkout Page</h1>
      <PurchasesList />
      <CheckoutActions />
    </main>
  );
}

export default CheckoutPage;
