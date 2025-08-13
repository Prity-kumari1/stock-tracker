import {useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import AddToCart from './page/AddToCart';
import DeleteButton from './page/DeleteButton';
import { FaArrowLeft } from "react-icons/fa";
import { toast } from 'react-toastify';
function CartPage() {
    const navigate = useNavigate();
    const { cartItems } = useCart();
    const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const handlePlaceUrder = () => {
        toast.success("Order Placed Thanks for Shopping")
    }
    return (
        <div className='relative w-[70%] m-auto'>
            <div className=" p-6 bg-[#F1F3F6]  mt-9 ">
                <div className='flex gap-1 '>
                    <div
                        onClick={() => navigate('/')}
                        className="px-3 py-2 rounded text-2xl text-[#232F3E] cursor-pointer hover:text-[#F3A847]"
                    >
                        <FaArrowLeft />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-[#232F3E]">Shopping Cart</h2>
                </div>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        <div className='text-right mt-9 '>
                            <button className='bg-[#FB641B] px-10 py-2 text-lg font-semibold text-white' onClick={handlePlaceUrder}>Place Order</button>
                        </div>
                        {cartItems.map((item) => (
                            <div>
                                <div
                                    key={item.id}
                                    className="flex border-b py-2 "
                                >
                                    <div className='p-2'>
                                        <img src={item.image} alt={item.image} className='w-[200px]' />
                                    </div>
                                    <div className='p-2'>
                                        <div>
                                            <h2 className='text-2xl font-bold'>{item.name}</h2>
                                            <p>{item.description}</p>
                                            <div className='flex gap-7 items-center'>
                                                <div className='border-2 inline-block border-[#F3A847] rounded-2xl px-4 py-1 mt-2'>

                                                    <AddToCart product={item} />
                                                </div>
                                                <DeleteButton productId={item.id} />
                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                    <div className='absolute right-2 p-5'>
                                        <p className='font-bold'>₹{item.price}.00</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="text-right mt-4 text-xl font-bold ">
                            Total: ₹{totalAmount}.00
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CartPage;
