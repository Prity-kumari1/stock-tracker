import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function AddProduct({ products, setProducts }) {
    const [showForm, setShowForm] = useState(false);
    const [image, setImage] = useState(null)
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
        image: ""
    });

    const handleImageChange = (e) => {
        console.log(e.target.files[0]);
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const imageURL = URL.createObjectURL(file);
            setImage(imageURL)
            setNewProduct(prev => ({
                ...prev, image: imageURL
            }))
        }
        else {
            toast.error("Please upload a valid image URL")
        }
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddProduct = (e) => {
        e.preventDefault();

        const newId = products.length + 1;
        const productToAdd = {
            ...newProduct,
            image:image,
            id: newId,
            price: parseFloat(newProduct.price)
        };

        setProducts([...products, productToAdd]);
        setNewProduct({
            name: "",
            price: "",
            category: "",
            description: "",
            image: ""
        });
        setShowForm(false);
        toast.success("Product Added successfully!");

    };

    return (
        <div>
            {/* Add Button */}
            <button
                onClick={() => setShowForm(!showForm)}
                className='px-4 py-2 bg-[#232F3E] text-white rounded mb-4 cursor-pointer'
            >
                {showForm ? "Close Form" : "Add Product"}
            </button>

            {/* Form */}
            {showForm && (

                <form onSubmit={handleAddProduct} className=' fixed inset-0 flex items-center justify-center z-50 bg-[#fff] '>
                    <div className='bg-[#F1F3F6]  w-[70%] h-[80%] m-auto p-5'>
                        <div  className="flex gap-6">
                            <div
                                onClick={() => setShowForm(null)} 
                                className=" px-3 py-2 rounded text-2xl text-[#232F3E]"
                            >
                                <FaArrowLeft />

                            </div>
                            <h1 className='text-[#232F3E] text-2xl font-bold'>Add Product</h1>
                        </div>
                        <div className='flex p-8'>
                            <div className='w-[70%] h-[80%] flex flex-col  gap-5'>
                                <div className='flex gap-10'>

                                    <p className='font-medium'>Image:</p>
                                    <div className='w-[400px] h-[100px] bg-[#fff] flex justify-center rounded-xl items-center p-4 overflow-hidden'>
                                        <input type="file"
                                            accept='image/*'
                                            onChange={handleImageChange}
                                            className='mb-4' />
                                        {
                                            image && (
                                                <img src={image} alt='Preview' className='w-[100px] rounded shadow ' />
                                            )
                                        }
                                    </div>
                                </div>
                                <div className='flex gap-10'>

                                    <p className='font-medium'>Name:</p>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={newProduct.name}
                                        onChange={handleInputChange}
                                        className='border p-2 rounded-md w-[500px] bg-white border-none outline-none'
                                        required
                                    />
                                </div>
                                <div className='flex gap-12'>

                                    <p className='font-medium'>Price:</p>
                                    <input
                                        type="number"
                                        name="price"
                                        placeholder="Price"
                                        value={newProduct.price}
                                        onChange={handleInputChange}
                                        className='border p-2 rounded-md w-[500px]  bg-white border-none outline-none'
                                        required
                                    />
                                </div>
                                <div className='flex gap-4'>

                                    <p className='font-medium'>Category: </p>
                                    <input
                                        type="text"
                                        name="category"
                                        placeholder="Category"
                                        value={newProduct.category}
                                        onChange={handleInputChange}
                                        className='border p-2 rounded-md w-[500px]  bg-white border-none outline-none'
                                        required
                                    />
                                </div>
                                <div className='flex gap-4'>

                                    <p className='font-medium'>Description: </p>
                                    <textarea
                                        type="text"
                                        name="description"
                                        placeholder="Description"
                                        value={newProduct.description}
                                        onChange={handleInputChange}
                                        className='border p-2 h-[100px] rounded-md w-[480px]  bg-white border-none outline-none'
                                        required
                                    />
                                </div>
                                <div>

                                    <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded-2xl hover:bg-green-700 flex gap-4 items-center">Add <FaArrowRight /> </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>

            )
            }
        </div>


    )
}

export default AddProduct