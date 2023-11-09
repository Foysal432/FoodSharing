import { useLoaderData } from "react-router-dom";

const SingleFood = () => {
    const data=useLoaderData()
    const{_id,pickuplocation,foodstatus,foodquantity,foodname,foodimage
        ,expiredtime,email,donatorname,donatorimage
        ,additionalnotes}=data
    console.log(data);
    return(
        <div>
             <div>
             <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{foodname}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      {/* modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button>
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