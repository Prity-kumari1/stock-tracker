import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import products from '../../product';
import AddToCart from './AddToCart';
import { FaArrowLeft } from "react-icons/fa";

function ProductDetailsPage() {
  const navigate = useNavigate();

  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  // Badge color set karne ka helper
  const getStockBadgeClass = (quantity) => {
    if (quantity < 5) return "bg-red-500 text-white px-2 py-1 rounded-full text-sm";
    if (quantity <= 10) return "bg-yellow-500 text-white px-2 py-1 rounded-full text-sm";
    return "bg-green-500 text-white px-2 py-1 rounded-full text-sm";
  };

  return (
    <div className="px-2 py-8 w-[70%] m-auto bg-[#F1F3F6] h-[80vh] mt-9 flex">
      <div className='w-[50%]'>
        <div className='flex gap-2'>
          <div
            onClick={() => navigate('/')}
            className="px-3 py-1 rounded text-2xl text-[#232F3E] cursor-pointer hover:text-[#F3A847]"
          >
            <FaArrowLeft />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-[#232F3E]">Product Details Page</h2>
        </div>

        <img src={product.image} alt={product.name} className="w-full max-w-md mx-auto" />
        <div className='flex justify-between items-center p-9'>
          <button className="bg-[#F3A847] px-3 py-1 mt-3 text-xl hover:bg-[#e49123] cursor-pointer">
            <AddToCart product={product} />
          </button>
          <button className="bg-[#FB641B]  px-3 py-1 mt-3 text-white text-xl hover:bg-[#f75c0f] cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>

      <div className='pt-6'>
        <h2 className="text-3xl font-bold mt-4">{product.name}</h2>
        <p className="text-lg mt-2">{product.description}</p>
        <p className="text-md mt-2">Category: {product.category}</p>
        <p className="text-xl font-bold mt-2">₹{product.price}</p>
        <p className="mt-2">
                  <span className="font-semibold">Stock: </span>
                  <span className={getStockBadgeClass(product.quantity)}>
                    {product.quantity}
                  </span>
                </p>
        {/* <h3>Available Stock: {product.quantity}</h3>
        {product.quantity < 5 && <p style={{ color: "red" }}>Low Stock! Restock soon</p>} */}
      </div>
    </div>
  );
}

export default ProductDetailsPage;
