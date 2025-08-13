import { MdEdit } from "react-icons/md";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
function EditProductButton({ productId, products, setProducts }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedProduct, setEditedProduct] = useState({});
    const [image, setImage] = useState(null)


    const handleEditClick = () => {
        const productToEdit = products.find((product) => product.id === productId);
        setEditedProduct(productToEdit);
        setIsEditing(true);
    };

    // Input change handle
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({ ...editedProduct, [name]: value });
    };

    // Update product in list + LocalStorage
    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedProducts = products.map((product) =>
            product.id === productId ? editedProduct : product
        );

        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        setIsEditing(false);
        toast.success("Product updated successfully!");
    };

    return (
        <>
            {/* Edit Button */}
            <button
                onClick={handleEditClick}
                className="mt-2 bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 cursor-pointer"
            >
                <MdEdit />
            </button>

            {/* Edit Form */}
            {isEditing && (
                <div className="fixed inset-0 flex items-center justify-center bg-[#fff] bg-opacity-40">
                    <form
                        onSubmit={handleUpdate}
                        className="relative w-[70%] m-auto bg-[#F1F3F6] h-[80%] p-6 flex flex-col gap-3"
                    >
                        <div className="flex gap-6">
                            <div
                                onClick={() => setIsEditing(false)}
                                className=" px-3 py-1 rounded text-2xl text-[#232F3E]"
                            >
                                <FaArrowLeft />

                            </div>
                            <h2 className="text-xl font-bold mb-4">Edit Product</h2>
                        </div>
                        <div className='flex gap-14'>

                            <p className='font-medium'>Image:</p>
                            <div className='w-[400px] h-[100px] bg-[#fff] flex justify-center rounded-xl items-center p-4 overflow-hidden'>
                                <input type="file"
                                    accept='image/*'
                                    onChange={handleChange}
                                    className='mb-4' />
                                {
                                    image && (
                                        <img src={image} alt='Preview' className='w-[100px] rounded-md shadow ' />
                                    )
                                }
                            </div>
                        </div>

                        <div className='flex gap-14'>

                            <p className='font-medium'>Name:</p>
                            <input
                                type="text"
                                name="name"
                                value={editedProduct.name || ""}
                                onChange={handleChange}
                                placeholder="Product Name"
                                className="w-[500px] border rounded-md  p-2 mb-3"
                            />
                        </div>
                        <div className='flex gap-16'>

                            <p className='font-medium'>Price:</p>
                            <input
                                type="number"
                                name="price"
                                value={editedProduct.price || ""}
                                onChange={handleChange}
                                placeholder="Price"
                                className="w-[500px] border rounded-md  p-2 mb-3"
                            />
                        </div>
                        <div className='flex gap-8'>

                            <p className='font-medium'>Category:</p>
                            <input
                                type="text"
                                name="category"
                                value={editedProduct.category || ""}
                                onChange={handleChange}
                                placeholder="Category"
                                className="w-[500px] border rounded-md  p-2 mb-3"
                            />
                        </div>

                        <div className='flex gap-4'>

                            <p className='font-medium'>Description: </p>
                            <textarea
                                type="text"
                                name="description"
                                placeholder="Description"
                                value={editedProduct.description}
                                onChange={handleChange}
                                className='border p-2 h-[100px] rounded-md w-[480px]  bg-white'
                                required
                            />
                        </div>




                        <div>

                            <button
                                type="submit"
                                className="bg-green-600 text-white px-3 py-1 rounded-2xl hover:bg-green-700 flex gap-4 items-center"
                            >
                                Continue <FaArrowRight />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}

export default EditProductButton;
