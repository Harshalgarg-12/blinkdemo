import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import {
  selectCartItems,
  selectCartTotalPrice,
  addItem,
  decreaseItem,
} from "../redux/reducer/cartSlice";

export default function CartToggel({ open, onClose }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotalPrice);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 hidden lg:flex">
      <div className="flex-1 bg-black/40" onClick={onClose} />

      <div className="w-full max-w-md h-full bg-[#f8f9fb] flex flex-col shadow-2xl">
        <div className="flex items-center gap-3 px-4 py-3 bg-white shadow-sm">
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <IoIosArrowBack size={22} />
          </button>
          <h2 className="text-base font-semibold">My Cart</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {items.length === 0 ? (
            <p className="text-sm text-gray-500 mt-4">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div
                key={item.productId}
                className="bg-white rounded-xl p-3 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-500">
                      {item.quantityText || item.quantity}
                    </p>
                    <p className="text-sm font-semibold mt-1">₹{item.price}</p>
                  </div>
                </div>

                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button
                    onClick={() => dispatch(decreaseItem(item.productId))}
                    className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                  >
                    <FiMinus />
                  </button>
                  <span className="px-3 text-sm font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => dispatch(addItem(item))}
                    className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-3 bg-white border-t">
          <div className="flex items-center justify-between mb-2 text-sm">
            <span>Grand total</span>
            <span className="font-semibold">₹{total}</span>
          </div>

          <button className="w-full h-11 rounded-lg bg-[rgb(12,131,31)] text-white font-semibold text-sm flex items-center justify-between px-4">
            <span>₹{total || 0} TOTAL</span>
            <span>Proceed</span>
          </button>
        </div>
      </div>
    </div>
  );
}
