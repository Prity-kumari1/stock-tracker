import { CiSearch } from "react-icons/ci";

function SearchBar({ query, onSearch }) {
  const handleInputChange = (e) => {
    const value = e.target.value;
    onSearch(value);
  };

  return (
    <div className="flex w-[500px] bg-white py-2 px-2 border-2 rounded-xl border-none outline-none text-black items-center gap-2 ">
        <CiSearch className="text-xl text-black font-bold"/>
      <input
      
        type="text"
        placeholder='Search by name, category or price'
        value={query}
        onChange={handleInputChange}
        className='w-[100%] outline-none text-md '
      />
    </div>
  );
}

export default SearchBar;