import React from "react";
import { Munchies } from "../data";

export default function Munchiespage() {
  return (
    <div>
      <div className="w-[1220px] mx-auto">
        <section className="rounded-[3px] shadow-[0_2px_2px_0_rgba(0,0,0,0.22)]">
          <div className="p-3 bg-white border-[.8px] border-[rgb(232,232,232)]">
            <h1 className="text-[13px] font-semibold leading-[19.5px] text-[rgb(31,31,31)]">
              Snacks & Munchies
            </h1>
          </div>
          <div className="h-[75vh] overflow-scroll overflow-x-hidden scroll-smooth bg-[rgb(248,248, 251)]">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 pb-5 ">
              {Munchies.map((product, idx) => {
                return (
                  <div key={idx} className="p-1.5">
                    <ItemBox product={product} />
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
