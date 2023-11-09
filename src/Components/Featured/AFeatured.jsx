import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";
const AFeatured = ({product}) => {

    console.log(product);
    const{_id,pickuplocation,foodstatus,foodquantity,foodname,foodimage
,expiredtime,email,donatorname,donatorimage
,additionalnotes}=product
    return(
        <div>
             <div className="relative p-5 flex flex-col text-gray-700 bg-white shadow-md h-[550px] rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg  rounded-xl bg-clip-border">
    <img  src={foodimage} alt="profile-picture" />
  </div>
  <div className="p-6 text-center">
    <h4 className="block mb-2 font-sans text-4xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
     {foodname}
    </h4>
   <div className="flex gap-3 items-center">
   <img className="w-10 rounded" src={donatorimage} alt="" />
   <p className="text-xl font-bold ">{donatorname}</p>
   </div>
  </div>
  <div className="text-lg font-medium ">
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
 
 <p>{additionalnotes}</p>
  </div>
<div className="mt-4">
  <Link to={`/addfoods/${_id}`}><button className="btn btn-primary w-full bg-green-400 text-white">View Details</button></Link>
</div>
</div>

</div>
    )}
export default AFeatured;