import React from "react";
import FloatingCart from "../../../shared/FloatingCart";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCartAction } from "../redux/actions/itemAction";

export default function Cart({ setCartIsOpen }) {
  const dispatch = useDispatch();
  const { itemList } = useSelector((state) => state.itemReducer);
  const { cartItemIdList } = useSelector((state) => state.cartReducer);
  let subtotal = 0;

  return (
    <div
      className="container cart p-0"
      style={{
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
      }}
    >
      <button
        type="button"
        onClick={() => setCartIsOpen(false)}
        style={{
          border: "none",
          background: "#313131",
          color: "white",
          fontSize: "30px",
          width: "50px",
          height: "50px",
        }}
      >
        X
      </button>
      <div
        style={{
          background: "#313131",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "60px",
          height: "fit-content",
          minHeight: "100%",
        }}
      >
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

            return (
              <div
                className="card-xx"
                style={{
                  width: "100%",
                  padding: "0px 20px",
                  justifyContent: "space-between",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <div
                  className=""
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <img
                    src={item.details?.image}
                    alt={item.name}
                    style={{
                      width: "70px",
                      objectFit: "contain",
                      height: "150px",
                      maxHeight: "150px",
                    }}
                  />
                  <div
                    className=""
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: "0 15px",
                    }}
                  >
                    <p
                      className="text-left font-weight-bold m-0"
                      style={{ fontSize: "14px", color: "white" }}
                    >
                      {item.name}
                    </p>
                    <p
                      className="text-left font-weight-bold m-0"
                      style={{ fontSize: "14px", color: "gray" }}
                    >
                      {item.details?.size}
                    </p>
                    <p
                      className="text-left font-weight-bold m-0"
                      style={{ fontSize: "14px", color: "gray" }}
                    >
                      {`Quantity: ${quantity}`}
                    </p>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    color: "lightyellow",
                    whiteSpace: "nowrap",
                  }}
                >
                  {`$ ${sum.toFixed(2)}`}
                </p>
                <button
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    border: "none",
                    color: "gray",
                    background: "transparent",
                    padding: "20px",
                  }}
                  type="button"
                  onClick={() => dispatch(removeFromCartAction(item.id))}
                >
                  X
                </button>
              </div>
            );
          })}
        {cartItemIdList.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              padding: "0 20px",
              alignItems: "center",
            }}
          >
            <p
              className="text-left font-weight-bold m-0"
              style={{ fontSize: "20px", color: "gray" }}
            >
              SUBTOTAL
            </p>
            <p
              className="m-0"
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                color: "lightyellow",
                whiteSpace: "nowrap",
              }}
            >
              {`$ ${subtotal.toFixed(2)}`}
            </p>
          </div>
        )}
        {cartItemIdList.length > 0 && (
          <button
            type="button"
            style={{
              background: "black",
              width: "90%",
              color: "white",
              height: "44px",
              margin: "20px",
            }}
          >
            Checkout
          </button>
        )}
      </div>
    </div>
  );
}
