import { useEffect, useState } from "react";
import Search from "../../Components/Search/Search";
import MainLayout from "../../MsinLayout/MainLayout";
import useAuth from "../../Hooks/useAuth";
import SProduct from "../../Components/SProduct/SProduct";

const ShowAll = () => {
    const {user}=useAuth()
    const [name,setName]=useState('')
    console.log(name);
    const [products,setProduct]=useState()
    const handleserch=(e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        setName(name)
        console.log(name);
    }
    
    useEffect(()=>{
        fetch(`https://foodsharing-delta.vercel.app/addfoods?foodname=${name}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[name])
    console.log(products);
    return(
        <div>
        <div className="navbar bg-green-400">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Available Food</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <form onSubmit={handleserch}>
      {/* <input name="name"  type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      <input type="submit"  value="Submit" /> */}
      <select onChange={(e)=>{setName(e.target.value)}} className="select select-bordered w-full max-w-xs">
  <option disabled selected>Search Your Food?</option>
  <option value={''}>All</option>
  {
    products?.map(product=>
      <option key={product._id} value={product.foodname}>{product.foodname}</option>)
  }
 
</select>
      </form>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
       <div className="grid md:grid-cols-2 gap-4">
{
    products?.map(product=><SProduct product={product} key={product._id}></SProduct>)
}
       </div>
        </div>
    )}
export default ShowAll;