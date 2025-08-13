import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

function DeleteProductButton({ productId, products, setProducts }) {
  const handleDelete = () => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    // alert('Product deleted successfully!');
    toast.success("Product deleted successfully!");
  };

  return (
    <button
      onClick={handleDelete}
      className="mt-2 bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 cursor-pointer"
    >
      <MdDelete />
    </button>
  );
}


export default DeleteProductButton;


