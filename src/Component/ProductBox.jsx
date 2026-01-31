import React from "react";
import Container from "./Container";
import {
  Dairy,
  Tobacco,
  Munchies,
  Hookah,
  Mouthfresheners,
  ColdDrinks,
  Candies,
} from "../data";
import { Link } from "react-router-dom";
import ItemBox from "./ItemBox";
export default function ProductBox() {
  return (
    <Container>
      <div>
        <section>
          <div className="text-2xl font-semibold text-[rgb(28,28,28)] px-3 h-[62px] flex items-center justify-between">
            Dairy, Bread & Eggs
            <Link to="/dairy">
              <span className="text-[14px] text-[rgb(12,131,31)] cursor-pointer">
                See all
              </span>
            </Link>
          </div>
          <div></div>
          <div>
            <div className="grid grid-cols-7 pb-5">
              {Dairy.slice(0, 7).map((product, idx) => {
                return <ItemBox key={idx} product={product} />;
              })}
            </div>
          </div>
        </section>
        <section>
          <div className="text-2xl font-semibold text-[rgb(28,28,28)] px-3 h-[62px] flex items-center justify-between">
            Rolling paper & tobacco
            <Link to="/tobacco">
              <span className="text-[14px] text-[rgb(12,131,31)] cursor-pointer">
                See all
              </span>
            </Link>
          </div>
          <div></div>
          <div className="grid grid-cols-7 pb-5">
            {Tobacco.slice(0, 7).map((product, idx) => {
              return <ItemBox key={idx} product={product} />;
            })}
          </div>
        </section>

        <section>
          <div className="text-2xl font-semibold text-[rgb(28,28,28)] px-3 h-[62px] flex items-center justify-between">
            Snacks & Munchies
            <Link to="/munchies">
              <span className="text-[14px] text-[rgb(12,131,31)] cursor-pointer">
                See all
              </span>
            </Link>
          </div>
          <div></div>
          <div className="grid grid-cols-7 pb-5">
            {Munchies.slice(0, 7).map((product, idx) => {
              return <ItemBox key={idx} product={product} />;
            })}
          </div>
        </section>
        <section>
          <div className="text-2xl font-semibold text-[rgb(28,28,28)] px-3 h-[62px] flex items-center justify-between">
            Hookah
            <Link to="/hookah">
              <span className="text-[14px] text-[rgb(12,131,31)] cursor-pointer">
                See all
              </span>
            </Link>
          </div>
          <div></div>
          <div className="grid grid-cols-7 pb-5">
            {Hookah.slice(0, 7).map((product, idx) => {
              return <ItemBox key={idx} product={product} />;
            })}
          </div>
        </section>
        <section>
          <div className="text-2xl font-semibold text-[rgb(28,28,28)] px-3 h-[62px] flex items-center justify-between">
            Mouth fresheners
            <Link to="/mouthfreshner">
              <span className="text-[14px] text-[rgb(12,131,31)] cursor-pointer">
                See all
              </span>
            </Link>
          </div>
          <div></div>{" "}
          <div className="grid grid-cols-7 pb-5">
            {Mouthfresheners.slice(0, 7).map((product, idx) => {
              return <ItemBox key={idx} product={product} />;
            })}
          </div>
        </section>
        <section>
          <div className="text-2xl font-semibold text-[rgb(28,28,28)] px-3 h-[62px] flex items-center justify-between">
            Cold Drinks & Juices
            <Link to="/colddrinks">
              <span className="text-[14px] text-[rgb(12,131,31)] cursor-pointer">
                See all
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-7 pb-5">
            {ColdDrinks.slice(0, 7).map((product, idx) => {
              return <ItemBox key={idx} product={product} />;
            })}
          </div>
        </section>

        <section>
          <div className="text-2xl font-semibold text-[rgb(28,28,28)] px-3 h-[62px] flex items-center justify-between">
            Candies & Gums
            <Link to="/candies">
              <span className="text-[14px] text-[rgb(12,131,31)] cursor-pointer">
                See all
              </span>
            </Link>
          </div>
          <div></div>{" "}
          <div className="grid grid-cols-7 pb-5">
            {Candies.slice(0, 7).map((product, idx) => {
              return <ItemBox key={idx} product={product} />;
            })}
          </div>
        </section>
      </div>
    </Container>
  );
}
