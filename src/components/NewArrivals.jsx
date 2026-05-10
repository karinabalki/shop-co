import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function NewArrivals() {

   let [products, setProducts] = useState([]);

    // async function getProduct(){
    // const res = await fetch(`https://dummyjson.com/products?limit=4`);
    // const data = await res.json();

    // setProducts(data.products);
    // }

    useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
    .then(res => res.json())
    .then(data => setProducts(data)); 
    }, []);

    // useEffect (() => {
    //   getProduct();
    // }, []);
 

  return (

    <div className="px:24">
    <div className="bg-black py-10 px-6 md:px-20">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center text-center">

      <h1 className="text-white text-3xl md:text-4xl font-semibold tracking-wider hover:text-gray-300 transition duration-300 cursor-pointer">
       VERSACE
      </h1>

      <h1 className="text-white text-3xl md:text-4xl font-bold tracking-widest hover:text-gray-300 transition duration-300 cursor-pointer">
       ZARA
      </h1>

      <h1 className="text-white text-3xl md:text-4xl font-light tracking-[4px] hover:text-gray-300 transition duration-300 cursor-pointer">
       GUCCI
      </h1>

      <h1 className="text-white text-3xl md:text-5xl font-black tracking-wide hover:text-gray-300 transition duration-300 cursor-pointer">
       PRADA
      </h1>

      <h1 className="text-white text-3xl md:text-4xl font-light hover:text-gray-300 transition duration-300 cursor-pointer">
       Calvin Klein
      </h1>
     </div>
    </div>

    <section className="bg-[#F2F0F1] py-20">

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            NEW ARRIVALS
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-20">

          {products.map((product) => {
            return (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="group"
              >
              <div className="bg-[#E8E8E8] rounded-3xl h-[320px] flex items-center justify-center overflow-hidden">

                <img
                  className="h-64 object-contain group-hover:scale-105 transition duration-300"
                  src={product.image}
                  alt={product.title}
                />

              </div>
                <div className="mt-4 space-y-2">
                  <h2 className="font-bold text-xl line-clamp-1">
                    {product.title}
                  </h2>

                  <div className="flex items-center gap-2">

                    <div className="text-yellow-400 text-lg">
                      ★★★★★
                    </div>

                    <p className="text-sm text-gray-600">
                      {product.rating?.rate}/5
                    </p>

                  </div>
            
                  <div className="flex items-center gap-3">

                    <p className="text-3xl font-bold">
                      ${product.price}
                    </p>

                    <p className="text-gray-400 line-through text-xl">
                      $260
                    </p>

                    <span className="bg-red-100 text-red-500 text-sm px-3 py-1 rounded-full">
                      -20%
                    </span>

                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}

    {/* <div className="text-center font-bold text-4xl pb-5">New Arrival</div>
      <div className="flex justify-center gap-4 ">
        {products.map((product) => {
        return (
          <Link to={`/product/${product.id}`}
          key={product.id} className="border border-gray-200 bg-gray-100 rounded-xl p-2"
           > 
            <img className="w-75 h-88" src={product.image} alt={product.title} />

            <p>{product.title}</p>

            <p>{product.rating?.rate}</p>   
            <p>({product.rating?.count} reviews)</p>

            <p>${product.price}</p>
          
          </Link>
        )
      })
      }
      </div>
   
    </div> 
  )
} */}

export default NewArrivals