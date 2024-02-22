import { useState } from "react";
import PageNav from "../components/PageNav";
import styles from "./Cart.module.css";
import Footer from "../components/Footer";
import EmptyCart from "../components/EmptyCart";
import OrderSummery from "../components/OrderSummery";
function Cart() {
  const [items, setItems] = useState(1);

  return (
    <>
      <div className={styles.cart}>
        <PageNav />
        <span>Your Cart</span>
        <main>
          <span className={styles.span}>{items} items in your cart</span>
          {!items && <EmptyCart />}
          <OrderSummery />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Cart;