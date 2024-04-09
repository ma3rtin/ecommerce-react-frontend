import React from "react";
import smartphone from "/smartphone.png";
import { Link } from "react-router-dom";
function CardProduct({ data: { id, title, price, category } }) {
  return (
    <>
    
      <Link to={`/product/${id}`} className="section2Container__card">
        <div className="section2Container__card--imgContainer">
          <img
            className="section2Container__card__imgContainer--img"
            src={smartphone}
            alt=""
          />
        </div>
        <div className="section2Container__card--div">
          <span>{title}</span>
          <br />
          <span>{price}</span>
        </div>
        <span className="section2Container__card--span">
          Categoria: {category}
        </span>
      </Link>
    </>
  );
}

export default CardProduct;
