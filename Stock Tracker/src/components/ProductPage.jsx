// import React, { useState, useEffect } from 'react';
import Navbar from './navbar/Navbar';
// import MainSection from './page/MainSection';
// import productsData from '../product';

// function ProductPage() {
//   const [products, setProducts] = useState(() => {
//     const stored = localStorage.getItem('products');
//     return stored ? JSON.parse(stored) : productsData;
//   });

//   useEffect(() => {
//     localStorage.setItem('products', JSON.stringify(products));
//   }, [products]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   return (
//     <div>
//       <Navbar
//         products={products}
//         selectedCategory={selectedCategory}
//         setSelectedCategory={setSelectedCategory}
//         searchQuery={searchQuery}
//         setSearchQuery={setSearchQuery}
//       />

//       <MainSection
//         products={products}
//         selectedCategory={selectedCategory}
//         searchQuery={searchQuery}
//         setProducts={setProducts}
//         setSelectedProduct={setSelectedProduct}
//       />
//     </div>
//   );
// }

// export default ProductPage;


// ProductPage.jsx
import MainSection from "./page/MainSection"
function ProductPage({ products, setProducts, selectedCategory, searchQuery, setSelectedProduct, setSearchQuery, setSelectedCategory }) {
  return (
    <div>
      <Navbar
        products={products}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />



    <MainSection
        products={products}
        setProducts={setProducts}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        setSelectedProduct={setSelectedProduct}
      />

    </div>
  );
}

export default ProductPage;
