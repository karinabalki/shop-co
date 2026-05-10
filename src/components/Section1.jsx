import React from 'react'
import myImg from "../assets/b26fea69ccfd8aa5825862cdb9604a4fb4930464.jpg"

function Section1() {
  
  return (
    <>
    <div className="flex gap-28 md:px-24  bg-[#F2F0F1] ">
        <div className=" pt-30">
          <div>
            <h1 className="text-black w-120  font-bold  text-6xl">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="w-140 mt-6 text-[#00000099]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className="border-2 bg-black text-white px-16 py-3 rounded-4xl mt-7">Shop now</button>
          </div>
          <div className="flex gap-9 mt-15  ">
            <div >
              <h1 className="text-black  font-bold  text-5xl ">200+</h1>
              <p className=" mt-2 text-[#00000099]">International Brands</p>
            </div>
            <div> 
              <h1 className="text-black  font-bold  text-5xl ">2,000+</h1>
              <p className=" mt-2 text-[#00000099]">High-Quality Products</p>
            </div>
            <div>
              <h1 className="text-black  font-bold  text-5xl ">30,000+</h1>
              <p className=" mt-2 text-[#00000099]">Happy Customers</p>
            </div>
          </div>
        </div>
        <div>
          <img className="h-170 w-300 object-cover object-top " src={myImg} alt="" />
        </div>
      </div>
    </>
  )
}

export default Section1