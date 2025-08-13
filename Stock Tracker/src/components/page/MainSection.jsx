import Card from './Card';
import AddProduct from './AddProduct';
function MainSection({products, selectedCategory, searchQuery, setProducts }) {

  return (
    <div className='w-[85%] m-auto p-8'>
      <AddProduct 
      products={products}
      setProducts={setProducts}
      />    
    <Card products={products}
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
          setProducts={setProducts}
    />
    </div>
  )
}

export default MainSection