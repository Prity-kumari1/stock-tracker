import SearchBar from './SearchBar';
import Filter from './Filter';
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext';


function Navbar({ products, selectedCategory, setSelectedCategory, searchQuery, setSearchQuery }) {
    const categories = ["All", ...new Set(products.map(item => item.category))];
    const handleSelectChange = (e) => {
        setSelectedCategory(e.target.value);
    };
    const handleSearch = (query) => {
        setSearchQuery(query);
    };


    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    return (
        <div className='max-w-screen overflow-x-hidden mx-auto flex justify-between  py-5 px-16 bg-[#232F3E] text-white'>
            <div className="logo">
                <h1 className='text-2xl font-bold '>Stock Tracker</h1>
            </div>
            <div className='flex items-center gap-5'>
                <SearchBar query={searchQuery} onSearch={handleSearch} />
                <Filter categories={categories} selectedCategory={selectedCategory} handleSelectChange={handleSelectChange} />
                <Link to="/cart" className='relative text-2xl'>
                    <FaCartArrowDown />
                    <span className='absolute -top-2 -right-3 bg-red-600 rounded-full px-2 text-sm'>{totalItems}</span>
                </Link>
            </div>

        </div>
    )
}

export default Navbar

