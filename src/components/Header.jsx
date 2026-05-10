import {IconChevronDown, IconSearch, IconShoppingCart, IconUser, IconX } from "@tabler/icons-react";

function Header(){

  return(
    <>
    <div className="">
      <div className="md:h-10 bg-black text-white flex justify-between md:px-30 md:pt-2">
        <div></div>
        <div className="flex gap-2 ">
          <p>Sign up and get 20% off to your first order.
            <a href="/" className="underline"> Sign Up Now</a>
          </p>
        </div>
        <button>
          <IconX/>
        </button>
      </div>

      <div className="flex justify-between md:py-3 md:px-24 px-3 py-6 " >
        <div className="flex gap-10 items-center"> 
          <a className=" font-black text-2xl cursor-pointer" href="/">SHOP.CO</a>
          <a className="md:flex items-center hidden cursor-pointer" href="/">Shop <IconChevronDown /></a>
          <a href="/" className=" hidden md:block cursor-pointer">On Sale</a>
          <a href="/" className=" hidden md:block cursor-pointer">New Arrivals</a>
          <a href="/" className=" hidden md:block cursor-pointer">Brands</a>
        </div>

        <div className="flex justify-between gap-4 items-center">
          <div className="relative">
            <input className="bg-gray-100 pl-8 w-xs p-1 rounded-2xl hidden md:block cursor-pointer"  type="text" placeholder="Search for products...." />
            <IconSearch className="cursor-pointer md:absolute top-1 left-1 text-gray-400"/>
          </div>
          <button>
            <IconShoppingCart className="cursor-pointer"/>
          </button>
          <button>
            <IconUser className="cursor-pointer"/>
          </button>
        </div>
      </div>


    </div>
    </>
  )
}

export default Header