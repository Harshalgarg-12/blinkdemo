import { FiPlus, FiMinus } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  decreaseItem,
  selectCartItems,
  selectCartTotalPrice,
} from "../redux/reducer/cartSlice"; 
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router";

const AddToCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotalPrice);

  const handleIncrease = (item) => {
    dispatch(addItem(item));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseItem(id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-md p-4">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4 justify-between">
         <div className="flex gap-2 items-center"> <FaShoppingCart className="text-green-600 text-xl" />
          <h1 className="text-lg font-semibold">My Cart</h1></div>
         <Link to="/"> <span className="inline-flex"><IoIosArrowBack size={22} /> Back to Home</span></Link>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-sm text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-3 max-h-[55vh] overflow-y-auto">
              {cartItems.map((item) => (
                <div
                  key={item.productId}
                  className="flex items-center justify-between border rounded-lg p-3"
                >
                  <div className=" flex items-center gap-3 max-w-[300px]!">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-md object-cover"
                    />
                    <div>
                      <h2 className="text-sm font-medium">{item.name}</h2>
                      <p className="text-xs text-gray-500">
                        {item.quantityText || item.quantity}
                      </p>
                      <p className="text-sm font-semibold mt-1">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>

                  {/* Quantity  */}
                  <div className="flex items-center border rounded-lg overflow-hidden">
                    <button
                      onClick={() => handleDecrease(item.productId)}
                      className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                    >
                      <FiMinus />
                    </button>
                    <span className="px-3 text-sm font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrease(item)}
                      className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>
              ))}
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
          </>
        )}
      </div>
    </div>
  );
};

export default AddToCart;
