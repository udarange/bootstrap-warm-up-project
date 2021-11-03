import React from "react";
import FloatingCart from "../../../shared/FloatingCart";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem.component";
import SubTotal from "../components/SubTotal.component";
import Checkout from "../components/Checkout.component";

const styles = {
  drawer: {
    width: "100%",
    maxWidth: "600px",
    height: "100vh",
    background: "transparent",
    zIndex: "9",
    position: "fixed",
    top: "0",
    right: "0",
    display: "flex",
    flexDirection: "row",
    overflowY: "scroll",
  },
  closeBtn: {
    border: "none",
    background: "#313131",
    color: "white",
    fontSize: "30px",
    width: "50px",
    height: "50px",
  },
  container: {
    background: "#313131",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "60px",
    height: "fit-content",
    minHeight: "100%",
  },
};

export default function Cart({ setCartIsOpen }) {
  const { itemList } = useSelector((state) => state.itemReducer);
  const { cartItemIdList } = useSelector((state) => state.cartReducer);
  let subtotal = 0;

  return (
    <div className="container cart p-0" style={styles.drawer}>
      <button
        type="button"
        onClick={() => setCartIsOpen(false)}
        style={styles.closeBtn}
      >
        X
      </button>
      <div style={styles.container}>
        <FloatingCart setCartIsOpen={setCartIsOpen} position={"relative"} />
        <div className="mt-4" />
        {itemList
          .filter((item) => cartItemIdList.includes(item.id))
          .map((item) => {
            const quantity = cartItemIdList.filter(
              (el) => el === item.id
            ).length;

            const sum = parseFloat(item.details?.price) * parseInt(quantity);
            subtotal += sum;

            return <CartItem item={item} quantity={quantity} sum={sum} />;
          })}
        {cartItemIdList.length > 0 && <SubTotal subtotal={subtotal} />}
        {cartItemIdList.length > 0 && <Checkout />}
      </div>
    </div>
  );
}
