import axios from "axios";
import React, { useState } from "react";
import ToastNotification from "./ToastNotification";

function PostProduct() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    code: "",
    price: "",
    category: "",
    status: true,
    stock:20
  });

  const [toast, setToast] = useState(false)

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("entré en el postProduct");
      console.log("document cookies:", document.cookie);
      await axios
        .post("http://localhost:8080/api/products", formData, {
          withCredentials: true,
        })
        .then((response) => {
          setToast(true)
        })
        .then((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div>
      <form className="register" onSubmit={handleSubmit}>
        <div className="register__title flexcolum">
          <h2>Register</h2>
          <p>join to us</p>
        </div>
        <div className="register__input flexcolum">
          <label className="register__input--username flexcolum">
            <span>Product name</span>
            <input onChange={handleInputChange} type="text" name="title" />
          </label>
          <label className="register__input--lastName flexcolum">
            <span>Description</span>
            <input
              onChange={handleInputChange}
              type="text"
              name="description"
            />
          </label>
          <label className="register__input--age flexcolum">
            <span>Code</span>
            <input onChange={handleInputChange} type="text" name="code" />
          </label>
          <label className="register__input--email flexcolum">
            <span>Price</span>
            <input onChange={handleInputChange} type="number" name="price" />
          </label>
          <label className="register__input--password flexcolum">
            <span>Category</span>
            <input onChange={handleInputChange} name="category" type="text" />
          </label>
        </div>

        <div className="register__button flexcolum">
          <button className="register__button--submit" type="submit">
            Create product
          </button>
        </div>
      </form>
      {toast && <ToastNotification str={'¡Producto agregado con éxito'}/>}
      </div>
    </>
  );
}

export default PostProduct;
