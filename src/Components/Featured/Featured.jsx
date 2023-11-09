import { useEffect, useState } from "react";
import AFeatured from "./AFeatured";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Featured = () => {
  const [fproducts,setFproduct]=useState()
  useEffect(()=>{
    fetch('https://foodsharing-delta.vercel.app/addfoods?sortField=foodquantity&sortOrder=desc')
    .then(res=>res.json())
    .then(data=>setFproduct(data))
  },[])
  console.log(fproducts);
    return(
        <div>
          <h1 className="text-center text-green-500 hover:underline text-4xl font-bold my-3">All Features Food</h1>
          <div className="ml-10">
          <Link to='showall'><button className="btn btn-secondary bg-green-500 text-white">See All <AiOutlineArrowRight></AiOutlineArrowRight> </button></Link>
          </div>
           <div className="grid md:grid-cols-3 gap-4">
            {
              fproducts?.slice(0,6).map(product=><AFeatured key={product._id} product={product}></AFeatured>)
            }
           </div>
          
        </div>
    )}
export default Featured;