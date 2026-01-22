import React from 'react'
import Container from './Container'
// import { CiStopwatch } from "react-icons/ci";
import { Dairy, Tobacco, Munchies, Hookah, Mouthfresheners, ColdDrinks, Candies } from '../data';
import { Link } from 'react-router-dom';
export default function ProductBox() {

  return (
    <Container>
      <div>
        <section>
          <div className='text-2xl font-semibold text-[rgb(28,28,28)] px-3 h-[62px] flex items-center justify-between' >
            Dairy, Bread & Eggs
            <Link to="/dairy">
              <span className="text-[14px] text-[rgb(12,131,31)] cursor-pointer">See all</span>
            </Link>
          </div>
          <div>

          </div>
          <div className='grid grid-cols-7 pb-5'>
            {Dairy.slice(0, 7).map(
              (product, idx) => {
                return <div key={idx} className='rounded-lg w-[179px] pb-3 border-[0.5px] border-[rgb(232,232,232)] shadow-[2px_2px_8px_rgba(0,0,0,0.04)]'>
                  <div className='flex justify-center' >
                    <img src={product.image} alt={product.name} width={"140px"} height={"140"} />
                  </div>
                  <div className='w-full px-3'>
                    <div className='flex items-center px-1 w-fit gap-1 bg-[rgb(248,248,248)] mb-[7px]'>
                      <img src="images/127.png" alt="" width={"11px"} height={"11px"} />
                      <span className="uppercase font-bold text-[9px] text-[rgb(54,54,54)]">
                        {product.deliveryTime}
                      </span>
                    </div>
                    <div className='mb-2'>
                      <h3 className=' capitalize text-[13px]  font-semibold text-[rgb(31,31,31)] mb-1.5'>
                        {product.name}
                      </h3>
                      <span className='text-[rgb(102,102,102)] text-[12px] '>{product.quantity}</span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className="text-[12px]  font-semibold text-[rgb(31,31,31)]">₹{product.price}</span>
                      <button className='text-[13px] text-[#318616] w-[66px] h-[31px] rounded-md font-semibold  border border-[#318616] bg-[rgb(247,255,249)]'> ADD</button>
                    </div>
                  </div>
                </div>
              }
            )}
          </div>
        </section>
        <section>
          <div className='text-2xl font-semibold text-[rgb(28,28,28)] px-3 h-[62px] flex items-center justify-between' >
            Rolling paper & tobacco
            <span className="text-[14px] text-[rgb(12,131,31)] cursor-pointer">See all</span>
          </div>
          <div>
          </div>
          <div className='grid grid-cols-7 pb-5'>
            {Tobacco.slice(0, 7).map(
              (product, idx) => {
                return <div key={idx} className='rounded-lg w-[179px] pb-3 border-[0.5px] border-[rgb(232,232,232)] shadow-[2px_2px_8px_rgba(0,0,0,0.04)]'>
                  <div className='flex justify-center' >
                    <img src={product.image} alt={product.name} width={"140px"} height={"140"} />
                  </div>
                  <div className='w-full px-3'>
                    <div className='flex items-center px-1 w-fit gap-1 bg-[rgb(248,248,248)] mb-[7px]'>
                      <img src="images/127.png" alt="" width={"11px"} height={"11px"} />
                      <span className="uppercase font-bold text-[9px] text-[rgb(54,54,54)]">
                        {product.deliveryTime}
                      </span>
                    </div >
                    <div className='mb-2'>
                      <h3 className=' capitalize text-[13px]  font-semibold text-[rgb(31,31,31)] mb-1.5'>
                        {product.name}
                      </h3>
                      <span className='text-[rgb(102,102,102)] text-[12px] '>{product.quantity}</span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className="text-[12px]  font-semibold text-[rgb(31,31,31)]">₹{product.price}</span>
                      <button className='text-[13px] text-[#318616] w-[66px] h-[31px] rounded-md font-semibold  border border-[#318616] bg-[rgb(247,255,249)]'> ADD</button>
                    </div>
                  </div>
                </div>
              }
            )}
          </div>
        </section>

        <section>
          <div className='text-2xl font-semibold text-[rgb(28,28,28)] px-3 h-[62px] flex items-center justify-between' >
            Snacks & Munchies
            <span className="text-[14px] text-[rgb(12,131,31)] cursor-pointer">See all</span>
          </div>
          <div>

          </div>
          <div className='grid grid-cols-7 pb-5'>
            {Munchies.map(
              (product, idx) => {
                return <div key={idx} className='rounded-lg w-[179px] pb-3 border-[0.5px] border-[rgb(232,232,232)] shadow-[2px_2px_8px_rgba(0,0,0,0.04)]'>
                  <div className='flex justify-center' >
                    <img src={product.image} alt={product.name} width={"140px"} height={"140"} />
                  </div>
                  <div className='w-full px-3'>
                    <div className='flex items-center px-1 w-fit gap-1 bg-[rgb(248,248,248)] mb-[7px]'>
                      <img src="images/127.png" alt="" width={"11px"} height={"11px"} />
                      <span className="uppercase font-bold text-[9px] text-[rgb(54,54,54)]">
                        {product.deliveryTime}
                      </span>
                    </div >
                    <div className='mb-2'>
                      <h3 className=' capitalize text-[13px]  font-semibold text-[rgb(31,31,31)] mb-1.5'>
                        {product.name}
                      </h3>
                      <span className='text-[rgb(102,102,102)] text-[12px] '>{product.quantity}</span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className="text-[12px]  font-semibold text-[rgb(31,31,31)]">₹{product.price}</span>
                      <button className='text-[13px] text-[#318616] w-[66px] h-[31px] rounded-md font-semibold  border border-[#318616] bg-[rgb(247,255,249)]'> ADD</button>
                    </div>
                  </div>
                </div>
              }
            )}
          </div>
        </section>
        <section>
          <div className='text-2xl font-semibold text-[rgb(28,28,28)] px-3 h-[62px] flex items-center justify-between' >
            Hookah
            <span className="text-[14px] text-[rgb(12,131,31)] cursor-pointer">See all</span>
          </div>
          <div>

          </div>
          <div className='grid grid-cols-7 pb-5'>
            {Hookah.map(
              (product, idx) => {
                return <div key={idx} className='rounded-lg w-[179px] pb-3 border-[0.5px] border-[rgb(232,232,232)] shadow-[2px_2px_8px_rgba(0,0,0,0.04)]'>
                  <div className='flex justify-center' >
                    <img src={product.image} alt={product.name} width={"140px"} height={"140"} />
                  </div>
                  <div className='w-full px-3'>
                    <div className='flex items-center px-1 w-fit gap-1 bg-[rgb(248,248,248)] mb-[7px]'>
                      <img src="images/127.png" alt="" width={"11px"} height={"11px"} />
                      <span className="uppercase font-bold text-[9px] text-[rgb(54,54,54)]">
                        {product.deliveryTime}
                      </span>
                    </div >
                    <div className='mb-2'>
                      <h3 className=' capitalize text-[13px]  font-semibold text-[rgb(31,31,31)] mb-1.5'>
                        {product.name}
                      </h3>
                      <span className='text-[rgb(102,102,102)] text-[12px] '>{product.quantity}</span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className="text-[12px]  font-semibold text-[rgb(31,31,31)]">₹{product.price}</span>
                      <button className='text-[13px] text-[#318616] w-[66px] h-[31px] rounded-md font-semibold  border border-[#318616] bg-[rgb(247,255,249)]'> ADD</button>
                    </div>
                  </div>
                </div>
              }
            )}
          </div>
        </section>
        <section>
          <div className='text-2xl font-semibold text-[rgb(28,28,28)] px-3 h-[62px] flex items-center justify-between' >
            Mouth fresheners
            <span className="text-[14px] text-[rgb(12,131,31)] cursor-pointer">See all</span>
          </div>
          <div>
          </div>  <div className='grid grid-cols-7 pb-5'>
            {Mouthfresheners.map(
              (product, idx) => {
                return <div key={idx} className='rounded-lg w-[179px] pb-3 border-[0.5px] border-[rgb(232,232,232)] shadow-[2px_2px_8px_rgba(0,0,0,0.04)]'>
                  <div className='flex justify-center' >
                    <img src={product.image} alt={product.name} width={"140px"} height={"140"} />
                  </div>
                  <div className='w-full px-3'>
                    <div className='flex items-center px-1 w-fit gap-1 bg-[rgb(248,248,248)] mb-[7px]'>
                      <img src="images/127.png" alt="" width={"11px"} height={"11px"} />
                      <span className="uppercase font-bold text-[9px] text-[rgb(54,54,54)]">
                        {product.deliveryTime}
                      </span>
                    </div >
                    <div className='mb-2'>
                      <h3 className=' capitalize text-[13px]  font-semibold text-[rgb(31,31,31)] mb-1.5'>
                        {product.name}
                      </h3>
                      <span className='text-[rgb(102,102,102)] text-[12px] '>{product.quantity}</span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className="text-[12px]  font-semibold text-[rgb(31,31,31)]">₹{product.price}</span>
                      <button className='text-[13px] text-[#318616] w-[66px] h-[31px] rounded-md font-semibold  border border-[#318616] bg-[rgb(247,255,249)]'> ADD</button>
                    </div>
                  </div>
                </div>
              }
            )}
          </div>
        </section>
        <section>
          <div className='text-2xl font-semibold text-[rgb(28,28,28)] px-3 h-[62px] flex items-center justify-between' >
            Cold Drinks & Juices
            <span className="text-[14px] text-[rgb(12,131,31)] cursor-pointer">See all</span>
          </div>
          <div className='grid grid-cols-7 pb-5'>
            {ColdDrinks.map(
              (product, idx) => {
                return <div key={idx} className='rounded-lg w-[179px] pb-3 border-[0.5px] border-[rgb(232,232,232)] shadow-[2px_2px_8px_rgba(0,0,0,0.04)]'>
                  <div className='flex justify-center' >
                    <img src={product.image} alt={product.name} width={"140px"} height={"140"} />
                  </div>
                  <div className='w-full px-3'>
                    <div className='flex items-center px-1 w-fit gap-1 bg-[rgb(248,248,248)] mb-[7px]'>
                      <img src="images/127.png" alt="" width={"11px"} height={"11px"} />
                      <span className="uppercase font-bold text-[9px] text-[rgb(54,54,54)]">
                        {product.deliveryTime}
                      </span>
                    </div >
                    <div className='mb-2'>
                      <h3 className=' capitalize text-[13px]  font-semibold text-[rgb(31,31,31)] mb-1.5'>
                        {product.name}
                      </h3>
                      <span className='text-[rgb(102,102,102)] text-[12px] '>{product.quantity}</span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className="text-[12px]  font-semibold text-[rgb(31,31,31)]">₹{product.price}</span>
                      <button className='text-[13px] text-[#318616] w-[66px] h-[31px] rounded-md font-semibold  border border-[#318616] bg-[rgb(247,255,249)]'> ADD</button>
                    </div>
                  </div>
                </div>
              }
            )}
          </div>
        </section>

        <section>
          <div className='text-2xl font-semibold text-[rgb(28,28,28)] px-3 h-[62px] flex items-center justify-between' >
            Candies & Gums
            <span className="text-[14px] text-[rgb(12,131,31)] cursor-pointer">See all</span>
          </div>
          <div>
          </div> <div className='grid grid-cols-7 pb-5'>
            {Candies.map(
              (product, idx) => {
                return <div key={idx} className='rounded-lg w-[179px] pb-3 border-[0.5px] border-[rgb(232,232,232)] shadow-[2px_2px_8px_rgba(0,0,0,0.04)]'>
                  <div className='flex justify-center' >
                    <img src={product.image} alt={product.name} width={"140px"} height={"140"} />
                  </div>
                  <div className='w-full px-3'>
                    <div className='flex items-center px-1 w-fit gap-1 bg-[rgb(248,248,248)] mb-[7px]'>
                      <img src="images/127.png" alt="" width={"11px"} height={"11px"} />
                      <span className="uppercase font-bold text-[9px] text-[rgb(54,54,54)]">
                        {product.deliveryTime}
                      </span>
                    </div >
                    <div className='mb-2'>
                      <h3 className=' capitalize text-[13px]  font-semibold text-[rgb(31,31,31)] mb-1.5'>
                        {product.name}
                      </h3>
                      <span className='text-[rgb(102,102,102)] text-[12px] '>{product.quantity}</span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className="text-[12px]  font-semibold text-[rgb(31,31,31)]">₹{product.price}</span>
                      <button className='text-[13px] text-[#318616] w-[66px] h-[31px] rounded-md font-semibold  border border-[#318616] bg-[rgb(247,255,249)]'> ADD</button>
                    </div>
                  </div>
                </div>
              }
            )}
          </div>
        </section>
      </div>
    </Container>
  )
}
