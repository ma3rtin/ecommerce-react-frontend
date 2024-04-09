import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/cart.css";
import CartItem from "./CartItem";

function Cart() {
  const [products, setProducts] = useState();
  const [total, setTotal] = useState(0);
  const [ticket, setTicket] = useState()


  async function fetchData() {
    try {
      await axios
        .get("http://localhost:8080/api/carts", { withCredentials: true })
        .then((response) => {
          setProducts(response.data.payload.products);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function buyCart() {
    try {
      await axios
        .post("http://localhost:8080/api/carts/purchase",{},{
          withCredentials: true,
        })
        .then((response) => {
          setTicket(response.data.payload);
          fetchData();
        });
    } catch (error) {
      console.log(error);
    }
  }

  function getTotal(prod) {
    let subtotal = 0;
    prod.forEach((element) => {
      subtotal += element.product.price * element.quantity;
    });
    setTotal(subtotal);
  }

  useEffect(() => {
    if (products) {
      getTotal(products);
    }
  }, [products]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        {products &&
          products.map((p, index) => (
            <CartItem
              key={index}
              id={p.product._id}
              title={p.product.title}
              price={p.product.price}
              quantity={p.quantity}
            />
          ))}
      </div>
          <div>
            {ticket && <p>Ticket: {ticket.code}</p>}
          </div>



      <section className="cartView flexrow">
        <section className="cart cartView__cart flexcolum"></section>
        <section className="orderSummary flexcolum">
          <h4 className="orderSummary__title">Order Summary</h4>
          <section className="orderSummary__description flexcolum">
            <div className="flexrow">
              <span>order Total:</span>
              <span>{total}</span>
            </div>
          </section>
          <button className="orderSummary__button" onClick={buyCart}>
            Place Order
          </button>
        </section>
      </section>
    </>
  );
}

export default Cart;
