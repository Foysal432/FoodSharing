import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const SingleFood = () => {
    const data=useLoaderData()
    const{_id,pickuplocation,foodstatus,foodquantity,foodname,foodimage
        ,expiredtime,email,donatorname,donatorimage
        ,additionalnotes}=data
    console.log(data);
    return(
        <div>
             <div className="text-center font-bold text-2xl">
                    <h1>Donar Information</h1>
                    <h1>Name: {donatorname}</h1>
                     <h1>Location: {pickuplocation}</h1>
                </div>
             <div>
               
             <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className="w-1/2" src={foodimage} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{foodname}</h2>
    <div className="flex items-center gap-2">
        <MdOutlineProductionQuantityLimits className="text-green-400"></MdOutlineProductionQuantityLimits>
    <p>{foodquantity}</p>
    </div>
    <div className="flex items-center gap-2">
 <AiOutlineClockCircle className="text-green-400"></AiOutlineClockCircle>
 <p>{expiredtime}</p>
 </div>
    <div className="card-actions justify-end">
      {/* modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>Request</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <button className="btn">Request</button>
    <p className="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>
  </div>
</div>
             </div>
        </div>
    )}
export default SingleFood;