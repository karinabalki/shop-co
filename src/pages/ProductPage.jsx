import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import image from "../assets/image.png";
import { IconAdjustmentsExclamation, IconChevronDown } from '@tabler/icons-react';
import Reviews from './Reviews';

function ProductPage() {

  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  return (

    <div className="px-24 my-10">
      <div className="flex justify-between gap-20">

        <div className="w-130 h-100 bg-gray-100 rounded-2xl flex items-center justify-center">
          <img
            className="w-70 h-80 object-contain"
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className="w-2/3 space-y-4">

          <p className="text-4xl font-bold">
            {product.title}
          </p>

          <p className="flex items-center">
            <img
              className="w-25 h-10 object-cover mr-5"
              src={image}
              alt="rating"
            />
            {product.rating?.rate}/5
          </p>

          <div className="flex gap-4 items-center">
            <p className="text-2xl font-bold">
              ${product.price}
            </p>

            <p className="text-gray-500">
              ({product.rating?.count} reviews)
            </p>
          </div>

          <div>
            <p className="text-gray-400 w-180">
              {product.description}
            </p>
          </div>

          <hr className="text-gray-300 w-180" />
        </div>
      </div>

      <div>
        <div className="flex justify-between ml-20 mr-20 mt-18">
          <p>Product Details</p>
          <p>Rating & Reviews</p>
          <p>FAQs</p>
        </div>

        <hr className="text-gray-300 mt-5" />

        <div className="flex justify-between ml-5 mr-5 mt-5">

          <div>
            <p className="text-2xl font-bold">
              All Reviews
            </p>
          </div>

          <div className="flex items-center gap-5">
            <button className="border-2 border-gray-300 bg-gray-300 p-2 rounded-3xl">
              <IconAdjustmentsExclamation />
            </button>

            <button className="flex gap-2 border-2 border-gray-300 bg-gray-300 p-2 pl-3 pr-3 rounded-3xl">
              Latest <IconChevronDown />
            </button>

            <button className="border-2 border-gray-300 bg-gray-300 p-2 pl-3 pr-3 rounded-3xl">
              Write a Review
            </button>
          </div>
        </div>

        <div>
          <Reviews />
        </div>

      </div>
    </div>
  )
}

export default ProductPage