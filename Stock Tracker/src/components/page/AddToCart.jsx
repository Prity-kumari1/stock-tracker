import { toast } from 'react-toastify';
import { useCart } from '../../context/CartContext';

function AddToCart({ product }) {
  const { cartItems, addToCart, updateQuantity, removeFromCart } = useCart();
  const cartItem = cartItems.find(item => item.id === product.id);

  const handleAddClick = () => {
    addToCart(product);
    toast.success("Product added to cart!");
  };

  const handleIncrement = () => {
    updateQuantity(product.id, cartItem.quantity + 1);
  };

  const handleDecrement = () => {
    if (cartItem.quantity > 1) {
      updateQuantity(product.id, cartItem.quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  return (
    <div>
      {!cartItem ? (
        <button onClick={handleAddClick} className='hover:cursor-pointer'>Add to cart</button>
      ) : (
        <div className='flex items-center gap-6'>
          <button onClick={handleDecrement} className='hover:cursor-pointer'>-</button>
          <span>{cartItem.quantity}</span>
          <button onClick={handleIncrement} className='hover:cursor-pointer'>+</button>
        </div>
      )}
    </div>
  );
}

export default AddToCart;

