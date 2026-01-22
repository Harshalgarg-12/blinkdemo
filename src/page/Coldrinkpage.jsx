import React from "react";
import { ColdDrinks } from "../data";

export default function Coldrinkpage() {
  return (
    <div>
      <div className="w-[1220px] mx-auto">
        <section className="rounded-[3px] shadow-[0_2px_2px_0_rgba(0,0,0,0.22)]">
          <div className="p-3 bg-white border-[.8px] border-[rgb(232,232,232)]">
            <h1 className="text-[13px] font-semibold leading-[19.5px] text-[rgb(31,31,31)]">
              Cold Drinks & Juices
            </h1>
          </div>
          <div className="h-[75vh] overflow-scroll overflow-x-hidden scroll-smooth bg-[rgb(248,248, 251)]">
            <div className="grid grid-cols-6 pb-5">
              {ColdDrinks.map((product, idx) => {
                return (
                  <div className="p-1.5">
                    <div
                      key={idx}
                      className="rounded-lg w-[179px] pb-3 border-[0.5px] border-[rgb(232,232,232)] h-[290px]  shadow-[2px_2px_8px_rgba(0,0,0,0.04)]"
                    >
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
                          <img
                            src="images/127.png"
                            alt=""
                            width={"11px"}
                            height={"11px"}
                          />
                          <span className="uppercase font-bold text-[9px] text-[rgb(54,54,54)]">
                            {product.deliveryTime}
                          </span>
                        </div>
                        <div className="mb-2">
                          <h3 className=" capitalize text-[13px]  font-semibold text-[rgb(31,31,31)] mb-1.5">
                            {product.name}
                          </h3>
                          <span className="text-[rgb(102,102,102)] text-[12px] ">
                            {product.quantity}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[12px]  font-semibold text-[rgb(31,31,31)]">
                            ₹{product.price}
                          </span>
                          <button className="text-[13px] text-[#318616] w-[66px] h-[31px] rounded-md font-semibold  border border-[#318616] bg-[rgb(247,255,249)]">
                            {" "}
                            ADD
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
