// import React from "react";
// import { Link } from "react-router-dom";

// function InventoryTable({ products }) {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">📦 Inventory Details</h1>
//       <div className="overflow-x-auto shadow-lg rounded-lg">
//         <table className="min-w-full border border-gray-300">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border p-2">#</th>
//               <th className="border p-2">Image</th>
//               <th className="border p-2">Name</th>
//               <th className="border p-2">Category</th>
//               <th className="border p-2">Price (₹)</th>
//               <th className="border p-2">Stock</th>
//               <th className="border p-2">Supplier</th>
//               <th className="border p-2">Date Added</th>
//               <th className="border p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((item, index) => (
//               <tr
//                 key={item.id}
//                 className={item.stock < 5 ? "bg-red-50" : ""}
//               >
//                 <td className="border p-2">{index + 1}</td>
//                 <td className="border p-2">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-12 h-12 object-cover rounded"
//                   />
//                 </td>
//                 <td className="border p-2">{item.name}</td>
//                 <td className="border p-2">{item.category}</td>
//                 <td className="border p-2">{item.price}</td>
//                 <td
//                   className={`border p-2 font-bold ${
//                     item.stock < 5 ? "text-red-500" : "text-green-600"
//                   }`}
//                 >
//                   {item.stock}
//                 </td>
//                 <td className="border p-2">{item.supplier || "N/A"}</td>
//                 <td className="border p-2">{item.dateAdded || "—"}</td>
//                 <td className="border p-2">
//                   <Link
//                     to={`/product/${item.id}`}
//                     className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
//                   >
//                     View
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//             {products.length === 0 && (
//               <tr>
//                 <td colSpan="9" className="text-center p-4 text-gray-500">
//                   No products found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default InventoryTable;


// InventoryTable.jsx
function InventoryTable({ products }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Inventory Table</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{p.name}</td>
              <td className="border border-gray-300 px-4 py-2">{p.category}</td>
              <td className="border border-gray-300 px-4 py-2">₹{p.price}</td>
              <td className="border border-gray-300 px-4 py-2">{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryTable;
