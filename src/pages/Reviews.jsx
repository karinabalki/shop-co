import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Reviews() {

const [product, setRating] = useState({});

const { id } = useParams();

async function getRating(){
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();

  setRating(data);
}

useEffect(() => {
  getRating();
}, [])

  return (

    <div className="grid gap-20 grid-cols-2 mt-20">
      {product.reviews?.map((product) => (
        <div key={id} className="border-2 border-gray-300 p-10 rounded-3xl">
          <h1 className="text-black font-bold text-2xl mb-2" >{product.reviewerName}</h1>
          <p className="text-[#00000099] mb-1 " >{product.reviewerEmail}</p>
          <p className="text-gray-500 ">"{product.comment}"</p>
          <p className="text-gray-600 mt-4">{product.date}</p>
        </div>
      ))}
    </div>
  )
}

export default Reviews