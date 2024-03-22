import "./LandingPage.scss";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <main className="home">
      {/* 4 big buttons occupy the screen, in 2 col 2 rows, all square */}
      <section className="home__button-container">
        <Link to="/checkout" className="home__button home__button--checkout">
          <h2>Checkout</h2>
        </Link>
        <Link to="/inventory" className="home__button home__button--inventory">
          <h2>Inventory</h2>
        </Link>
        <Link to="/orders" className="home__button home__button--reports">
          <h2>Reports</h2>
        </Link>
        <Link to="/customers" className="home__button home__button--settings">
          <h2>Settings</h2>
        </Link>
      </section>
    </main>
  );
}

export default LandingPage;
