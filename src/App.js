// import "./styles.css";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Products from "./Products/Products";
import SingleProduct from "./SingleProduct/SingleProduct";
import Cart from "./Cart/Cart"
import ErrorPage from "./ErrorPage/ErrorPage";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="/about" element={<About />}/>
        <Route path ="/product" element={<Products />}/>
        <Route path ="/contact" element={<Contact />}/>
        <Route path ="/singleproduct/:id" element={<SingleProduct />}/>
        <Route path ="/cart" element={<Cart />}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
