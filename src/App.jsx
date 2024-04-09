import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import PostProduct from "./components/PostProduct";
import Cart from "./components/Cart";
import Ticket from "./components/Ticket";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/createproduct" element={<PostProduct />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/purchaseticket" element={<Ticket />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>

          <Route path="/*" element={<Main />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
