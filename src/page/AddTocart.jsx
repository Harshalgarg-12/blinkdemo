import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);

  const price = 45; // price per item
  const total = price * quantity;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-md p-4">
        
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <FaShoppingCart className="text-green-600 text-xl" />
          <h1 className="text-lg font-semibold">My Cart</h1>
        </div>

        {/* Product Card */}
        <div className="flex items-center justify-between border rounded-lg p-3">
          <div className="flex items-center gap-3">
            <img
              src="https://via.placeholder.com/60"
              alt="product"
              className="w-14 h-14 rounded-md object-cover"
            />

            <div>
              <h2 className="text-sm font-medium">Fresh Milk</h2>
              <p className="text-xs text-gray-500">500 ml</p>
              <p className="text-sm font-semibold mt-1">₹{price}</p>
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
            >
              <FiMinus />
            </button>
            <span className="px-3 text-sm font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
            >
              <FiPlus />
            </button>
          </div>
        </div>

        {/* Price Summary */}
        <div className="mt-4 border-t pt-3">
          <div className="flex justify-between text-sm">
            <span>Total Amount</span>
            <span className="font-semibold">₹{total}</span>
          </div>
        </div>

        {/* Checkout Button */}
        <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm font-semibold">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
