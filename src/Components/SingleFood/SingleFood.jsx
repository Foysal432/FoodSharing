import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const SingleFood = () => {
  const{user}=useAuth()
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
  {/* <input type="text" placeholder= {foodname} className="input w-full max-w-xs border bg-slate-200" />
  <img className="w-1/3" src={foodimage} alt="" />
  <input type="text" placeholder={_id} className="input w-full max-w-xs bg-slate-200" />
  <input type="text" placeholder={email} className="input w-full max-w-xs  bg-slate-200 my-3" />
  <input type="text" placeholder={donatorname} className="input w-full max-w-xs bg-slate-200" /> */}
 <form>
 <label>Food name:
        <input value={foodname} type="text" />
      </label><br />
  <label>Food Image:
        <input value={foodimage} type="text" />
      </label><br />
  <label>food ID:
        <input value={_id} type="text" />
      </label><br />
  <label>Donator Email:
        <input value={email} type="text" />
      </label><br />
  <label>Donator Name:
        <input value={donatorname} type="text" />
      </label><br />
  <label>User Email:
        <input value={user.email} type="text" />
      </label><br />
  <label>Location:
        <input  value={location} type="text" />
      </label><br />
   <label>Expire:
        <input value={expiredtime} type="text" />
      </label><br />
   <label>Donation Money:
   <input type="text" placeholder="Money" className="input w-full max-w-xs" />
      </label><br />
   <label>Additional Notes:
   <input type="text" value={additionalnotes} className="input w-full max-w-xs" />
      </label>
 </form>
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