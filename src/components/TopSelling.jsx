import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function TopSelling(){
  
  let [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {

        const filteredProducts = data
        .filter(product => product.id > 4)
        .slice(0, 4);

        setProducts(filteredProducts);

      });
    }, []);

  return(
    <div>
      <section className="bg-[#F2F0F1] py-20">

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            TOP SELLING
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

      <div className="bg-[#F2F0F1] rounded-[40px] p-8 md:p-14 mx-6 md:mx-20 my-20">

         <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-tight">
          BROWSE BY DRESS STYLE
        </h1>

  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          
          <div className="relative overflow-hidden rounded-3xl h-[260px] group cursor-pointer bg-white">
            <img
             className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Man_wearing_green_shirt-jacket%2C_blue_jeans_and_desert_boots_01.jpg/500px-Man_wearing_green_shirt-jacket%2C_blue_jeans_and_desert_boots_01.jpg"
             alt="Casual"
            />

            <div className="absolute inset-0 bg-black/10"></div>

            <h2 className="absolute top-6 left-6 text-4xl font-bold text-white">
             Casual
            </h2>

          </div>  

          <div className="relative overflow-hidden rounded-3xl h-[260px] md:col-span-2 group cursor-pointer bg-white">

             <img
               className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
               src="https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229753.jpg?semt=ais_hybrid&w=740&q=80"
               alt="Accessories"
              />

              <div className="absolute inset-0 bg-black/20"></div>

               <h2 className="absolute top-6 left-6 text-4xl font-bold text-white">
                 Accessories
               </h2>

          </div>

        </div>

          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          <div className="relative overflow-hidden rounded-3xl h-[260px] md:col-span-2 group cursor-pointer bg-white">

            <img
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500 left-5"
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1400&auto=format&fit=crop"
              alt="Party"
           />

           <div className="absolute inset-0 bg-black/10"></div>

           <h2 className="absolute top-6 left-6 text-4xl font-bold text-white">
             Party
           </h2>

          </div>

   
            <div className="relative overflow-hidden rounded-3xl h-[260px] group cursor-pointer bg-white">

             <img
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
                alt="Formal"
              />

              <div className="absolute inset-0 bg-black/20"></div>

              <h2 className="absolute top-6 left-6 text-4xl font-bold text-white">
                Formal
              </h2>

            </div>

        </div>

      </div>
    </div>
  )
  
}

export default TopSelling