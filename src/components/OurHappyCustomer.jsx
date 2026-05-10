import React, { useEffect, useState } from 'react'
import { IconCircleCheckFilled, IconArrowLeft, IconArrowRight} from '@tabler/icons-react'
import Visa from "../assets/visa.jpg";
import Paypal from "../assets/paypal.jpg";
import Gpay from "../assets/gPay.jpg";
import ApplePay from "../assets/applepay.jpg";
import Mastercard from "../assets/mastercard.jpg";

function OurHappyCustomer() {

   let [products, setProducts] = useState([]);
  
      useEffect(() => {
      fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data)); 
      }, []);

  return (

    <div className="bg-[#F2F0F1] pt-20">

      {/* Reviews Section */}
      <section className="px-6 md:px-20">

        {/* Heading */}
        <div className="flex items-center justify-between mb-10">

          <h1 className="text-4xl md:text-5xl font-extrabold">
            OUR HAPPY CUSTOMERS
          </h1>

          <div className="flex gap-4">

            <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition">
              <IconArrowLeft />
            </button>

            <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition">
              <IconArrowRight />
            </button>

          </div>

        </div>

        <div className="overflow-hidden relative">

          <div className="flex gap-6 animate-scroll w-lvw">

            {[...products, ...products].map((product, index) => (

              <div
                key={index}
                className="min-w-[350px] bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition duration-300"
              >

                {/* Stars */}
                <div className="text-yellow-400 text-xl mb-4">
                  ★★★★★
                </div>

                {/* Name */}
                <div className="flex items-center gap-2 mb-4">

                  <h2 className="font-bold text-xl line-clamp-1">
                    {product.title}
                  </h2>

                  <IconCircleCheckFilled
                    className="text-green-500"
                    size={20}
                  />

                </div>

                {/* Review */}
                <p className="text-gray-500 leading-7">
                  Rating : {product.rating?.rate}/5
                </p>

                <p className="text-gray-400 mt-3">
                  "{product.description?.slice(0, 90)}..."
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Newsletter Section */}
      <section className="px-6 md:px-20 mt-20 relative top-20 z-10">

        <div className="bg-black rounded-[40px] px-8 md:px-16 py-12 flex flex-col md:flex-row justify-between items-center gap-10">

          {/* Left Text */}
          <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight max-w-xl">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>

          {/* Right Form */}
          <div className="w-full md:w-[400px] space-y-4">

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-white rounded-full px-6 py-4 outline-none"
            />

            <button className="w-full bg-white rounded-full py-4 font-medium hover:bg-gray-200 transition">
              Subscribe to Newsletter
            </button>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-white pt-40 pb-10 px-6 md:px-20">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-gray-300 pb-10">

          {/* Logo */}
          <div>

            <h1 className="text-4xl font-extrabold mb-5">
              SHOP.CO
            </h1>

            <p className="text-gray-500 leading-7">
              We have clothes that suits your style and which you're proud to wear.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">

              <div className="w-10 h-10 rounded-full border flex items-center justify-center">
                X
              </div>

              <div className="w-10 h-10 rounded-full border flex items-center justify-center">
                F
              </div>

              <div className="w-10 h-10 rounded-full border flex items-center justify-center">
                I
              </div>

              <div className="w-10 h-10 rounded-full border flex items-center justify-center">
                G
              </div>

            </div>

          </div>

          {/* Company */}
          <div>

            <h2 className="font-bold mb-5 tracking-[3px]">
              COMPANY
            </h2>

            <div className="space-y-3 text-gray-500">
              <p>About</p>
              <p>Features</p>
              <p>Works</p>
              <p>Career</p>
            </div>

          </div>

          {/* Help */}
          <div>

            <h2 className="font-bold mb-5 tracking-[3px]">
              HELP
            </h2>

            <div className="space-y-3 text-gray-500">
              <p>Customer Support</p>
              <p>Delivery Details</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>

          </div>

          {/* FAQ */}
          <div>

            <h2 className="font-bold mb-5 tracking-[3px]">
              FAQ
            </h2>

            <div className="space-y-3 text-gray-500">
              <p>Account</p>
              <p>Manage Deliveries</p>
              <p>Orders</p>
              <p>Payments</p>
            </div>

          </div>

          {/* Resources */}
          <div>

            <h2 className="font-bold mb-5 tracking-[3px]">
              RESOURCES
            </h2>

            <div className="space-y-3 text-gray-500">
              <p>Free eBooks</p>
              <p>Development Tutorial</p>
              <p>How to - Blog</p>
              <p>Youtube Playlist</p>
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-5">

          <p className="text-gray-500 text-sm">
            Shop.co © 2000-2023, All Rights Reserved
          </p>

          <div className="flex gap-3">

            <div className="bg-white border border-gray-200 rounded-md p-2">
             <img className="w-10 h-8 object-contain" src={Visa} alt="visa" />
            </div>

            <div className="bg-white border border-gray-200  rounded-md p-2">
             <img className="w-10 h-8 object-contain" src={Mastercard} alt="mastercard" />
            </div>

            <div className="bg-white border border-gray-200  rounded-md p-2">
             <img className="w-10 h-8 object-contain" src={Paypal} alt="paypal" />
            </div>

            <div className="bg-white border border-gray-200  rounded-md p-2">
             <img className="w-10 h-8 object-contain" src={ApplePay} alt="applepay" />
            </div>

            <div className="bg-white border border-gray-200  rounded-md p-2">
             <img className="w-10 h-8 object-contain" src={Gpay} alt="gpay" />
            </div>

          </div>

        </div>

      </footer>

    </div>
  )
}

export default OurHappyCustomer