// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ProductPage from "./components/ProductPage";
// import CartPage from "./components/CartPage";
// import InventoryTable from "./components/page/InventoryTable";
// import ProductDetailsPage from './components/page/ProductDetailsPage'
// function App() {
//   return (
//     <Router>
//       <div className='max-w-screen overflow-x-hidden mx-auto'>
//         <Routes>
//           <Route path="/" element={<ProductPage />} />
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/product/:id" element={<ProductDetailsPage />} />
//           <Route path="/inventory" element={<InventoryTable/>} />

//         </Routes>
//       </div>
//       <ToastContainer position="top-right" autoClose={2000} theme="colored" />
//     </Router>
//   );
// }

// export default App;

// App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import InventoryTable from "./components/page/InventoryTable";
import ProductDetailsPage from './components/page/ProductDetailsPage';

function App() {
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem('products');
    return stored ? JSON.parse(stored) : productsData;
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
  //   setProducts(savedProducts);
  // }, []);

  return (
    <Router>
      <div className="max-w-screen overflow-x-hidden mx-auto">
        <Routes>
          <Route
            path="/"
            element={<ProductPage products={products} setProducts={setProducts} searchQuery={searchQuery} selectedCategory={selectedCategory} setSelectedProduct={selectedProduct} setSearchQuery={setSearchQuery} setSelectedCategory={setSelectedCategory} />}
          />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/product/:id"
            element={<ProductDetailsPage products={products} />}
          />
          <Route
            path="/inventory"
            element={<InventoryTable products={products} />}
          />
        </Routes>
      </div>
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
    </Router>
  );
}

export default App;

