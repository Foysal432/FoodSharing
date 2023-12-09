import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";

const SProduct = ({product}) => {
    const{_id,pickuplocation,foodstatus,foodquantity,foodname,foodimage
        ,expiredtime,email,donatorname,donatorimage
        ,additionalnotes}=product
    return(
        <div>
    <div className="card h-72 lg:card-side w bg-base-100 shadow-xl">
  <img className="lg:w-1/2" src={foodimage} alt="Album"/>
  <div className="">
    <h2 className="card-title text-3xl px-2 py-2">{foodname}</h2>
   <div className="flex gap-5 ml-4">
    <img className="w-10 rounded"src={donatorimage}alt="" />
    <p>{donatorname}</p>
   </div>
<div className="ml-5">
<div className="flex items-center gap-2">
        <MdOutlineProductionQuantityLimits className="text-green-400"></MdOutlineProductionQuantityLimits>
    <p>{foodquantity}</p>
    </div>
 
 <div className="flex items-center gap-2">
 <CiLocationArrow1 className="text-green-400"></CiLocationArrow1><p>{pickuplocation}</p>
 </div>
 <div className="flex items-center gap-2">
 <AiOutlineClockCircle className="text-green-400"></AiOutlineClockCircle>
 <p>{expiredtime}</p>
 </div>
 <p className="my-4">{additionalnotes}</p>
</div>
    <div className="card-actions justify-end">
      <Link to={`/addfoods/${_id}`}><button className="btn btn-primary bg-green-400 text-white">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    )}
export default SProduct;