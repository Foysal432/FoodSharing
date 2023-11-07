import { useEffect, useState } from "react";
import Search from "../../Components/Search/Search";
import MainLayout from "../../MsinLayout/MainLayout";
import useAuth from "../../Hooks/useAuth";
import SProduct from "../../Components/SProduct/SProduct";

const ShowAll = () => {
    const {user}=useAuth()
    const [name,setName]=useState()
    const [products,setProduct]=useState()
    const handleserch=(e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        setName(name)
    }
    useEffect(()=>{
        fetch(`http://localhost:5000/addfoods?foodname=`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },)
    console.log(products);
    return(
        <div>
        <div className="navbar bg-green-400">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <form onSubmit={handleserch}>
      <input name="name"  type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      <input type="submit" value="Submit" />
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
       <div className="grid grid-cols-3">
{
    products?.map(product=><SProduct product={product} key={product._id}></SProduct>)
}
       </div>
        </div>
    )}
export default ShowAll;