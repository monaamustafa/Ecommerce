import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Error from "./components/Error";
import Home from "./components/Home/Home";
import Blog from "./components/Blog";
import PageLayout from "./components/PageLayouts/PageLayout";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import ProductDetails from "./components/Products/ProductDetails";
import ListOfProducts from "./components/Products/ListOfProducts";

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<ListOfProducts />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blogs" element={<Blog />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
export default App;
