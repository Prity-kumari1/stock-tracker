import React from 'react'

function Filter({categories, selectedCategory, handleSelectChange}) {
    return (
        <div>
            <select value={selectedCategory} onChange={handleSelectChange} className='outline-none rounded-xl border-none py-2 px-2 bg-amber-50 text-black'>
                {categories.map((category, index) => (
                    <option value={category} key={index} className='outline-none rounded-xl border-none px-2'>{category}</option>
                ))}
            </select>
        </div>
    )
}

export default Filter