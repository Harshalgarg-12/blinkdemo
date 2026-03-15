import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseItem,
  selectCartItemQuantity,
} from "../redux/reducer/cartSlice";
export default function ItemBox({ product }) {
  const dispatch = useDispatch();

  const quantity = useSelector((state) =>
    selectCartItemQuantity(state, product.productId)
  );

  const handleAdd = () => {
    dispatch(addItem(product));
  };

  const handleDecrease = () => {
    dispatch(decreaseItem(product.productId));
  };

  return (
    <div className="rounded-lg w-[179px] pb-3 border-[0.5px] border-[rgb(232,232,232)] shadow-[2px_2px_8px_rgba(0,0,0,0.04)]">
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          width={"140px"}
          height={"140"}
        />
      </div>
      <div className="w-full px-3">
        <div className="flex items-center px-1 w-fit gap-1 bg-[rgb(248,248,248)] mb-[7px]">
          <img src="images/127.png" alt="" width={"11px"} height={"11px"} />
          <span className="uppercase font-bold text-[9px] text-[rgb(54,54,54)]">
            {product.deliveryTime}
          </span>
        </div>

        <div className="mb-2">
          <h3 className="capitalize text-[13px] font-semibold text-[rgb(31,31,31)] mb-1.5">
            {product.name}
          </h3>
          <span className="text-[rgb(102,102,102)] text-[12px] ">
            {product.quantity}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[12px] font-semibold text-[rgb(31,31,31)]">
            ₹{product.price}
          </span>

          {quantity === 0 ? (
            // ADD button jab cartcitem me nahi hai tb hi dikhe 
            <button
              onClick={handleAdd}
              className="text-[13px] text-[#318616] w-[66px] h-[31px] rounded-md font-semibold border border-[#318616] bg-[rgb(247,255,249)] cursor-pointer"
            >
              ADD
            </button>
          ) : (
            // Quantity controls jab cart me aa chuka hai
            <div className="flex items-center border rounded-md overflow-hidden w-[80px] h-[31px]">
              <button
                onClick={handleDecrease}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-sm font-bold"
              >
                -
              </button>
              <span className="px-2 text-sm font-medium">{quantity}</span>
              <button
                onClick={handleAdd}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-sm font-bold"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
