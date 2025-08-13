import { toast } from 'react-toastify';
import { useCart } from '../../context/CartContext';


function DeleteButton({ productId }) {
    const { removeFromCart } = useCart();
    const handleDelete = () => {
        removeFromCart(productId);
        toast.error("Item removed from cart");
    };

    return (
        <button
            onClick={handleDelete}
            className=" text-md font-semibold hover:text-blue-600"
        >
            Remove
        </button>
    );
}

export default DeleteButton;