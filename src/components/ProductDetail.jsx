import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/productDetail.css";
function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);

  async function fetchProduct() {
    await axios
      .get(`http://localhost:8080/api/products/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        setProduct(response.data.payload);
      });
  }

  async function addToCart() {
    try {
      await axios.post(
        `http://localhost:8080/api/carts/products/${id}`,
        { quantity: quantity },
        {
          withCredentials: true,
        }
      ).then((response)=>{
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    try {
      fetchProduct();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {product && (
        <section className="singleProduct">
          <section className="singleProduct__section sps1">
            <div className="sps1__picture">
              <img src="images/3 → prod8.jpg.png" alt="imagen producto" />
            </div>
          </section>
          <section className="singleProduct__section sps2">
            <h2 className="sps2__name">{product && product.title}</h2>

            <p className="sps2__price">${product && product.price}</p>

            <ul className="sps2__description">
              <li className="sps2__description--item">
                {product && product.description}
              </li>
            </ul>

            <span className="sps2__shipping">free shipping</span>

            <span className="sps2__stock">in stock</span>

            <div className="sps2__addcart flexrow">
              <div>
                <button
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity === 1}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={quantity == product.stock}
                >
                  +
                </button>
              </div>
              <br />
              <button onClick={addToCart}>Add To Cart</button>
              <i className="ri-heart-line"></i>
            </div>
          </section>
          <section className="orderSummary sps3 flexcolum">
            <h4 className="orderSummary__title">Your Cart</h4>
            <section className="orderSummary__description flexcolum">
              <div className="flexcolum">
                <img src="" alt="" />
                <div>
                  <p></p>
                  <span></span>
                </div>
                <i className="ri-close-line"></i>
              </div>
              <div className="flexrow">
                <span>Sub Total:</span>
                <span>{product.price}</span>
              </div>
            </section>

            <div className="flexrow">
              <button className="orderSummary__button">View cart</button>
              <button className="orderSummary__button">Checkout</button>
            </div>
          </section>
        </section>
      )}
    </>
  );
}

export default ProductDetail;
