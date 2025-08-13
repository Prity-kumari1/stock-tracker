import AddToCart from './AddToCart';
import { Link } from 'react-router-dom';
import DeleteProductBtn from './DeleteProductBtn';
import EditProductButton from './EditProduct';


function Card({ products, selectedCategory, searchQuery, setProducts }) {
  const filteredProducts = products.filter(product => {
    const matchCategory = selectedCategory === "All" || product.category === selectedCategory;
    const query = searchQuery?.toLowerCase() || "";
    const matchQuery =
      (product.name?.toLowerCase().includes(query)) ||
      (product.category?.toLowerCase().includes(query)) ||
      (product.price?.toString().includes(query));

    return matchCategory && matchQuery;
  });
  return (
    <div className='flex flex-wrap gap-3 justify-between'>
      <div className='flex flex-wrap gap-8 '>
        {filteredProducts.map(item => (
          <div key={item.id} className='w-[270px]  mb-[20px] rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl'>
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.name} className="rounded-tl-xl rounded-tr-xl transition-transform duration-300 hover:scale-105" />
              <div className="p-4">
                <h1 className="font-bold">{item.name}</h1>
                <p className="text-[#C96D3C] font-bold">Price: {item.price}</p>
                <p><span className="font-semibold">Category: </span>{item.category}</p>
                <p><span className="font-semibold">Description: </span>{item.description}</p>
              </div>
            </Link>
            <div className="px-4 pb-4 flex justify-between items-center">
              <button className="border-[#F3A847] bg-transparent px-3 py-1 mt-3 border-2 rounded-2xl hover:bg-[#F3A847] cursor-pointer">
                <AddToCart product={item} />
              </button>
              <div className='flex gap-4'>
                <EditProductButton
                  productId={item.id}
                  products={products}
                  setProducts={setProducts}
                />
                <DeleteProductBtn
                  productId={item.id}
                  products={products}
                  setProducts={setProducts}
                  onDelete={(updatedProducts) => setProducts(updatedProducts)}
                />

              </div>



            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card