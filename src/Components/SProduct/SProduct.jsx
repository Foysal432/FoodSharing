const SProduct = ({product}) => {
    const{_id,pickuplocation,foodstatus,foodquantity,foodname,foodimage
        ,expiredtime,email,donatorname,donatorimage
        ,additionalnotes}=product
    return(
        <div>
             <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={foodimage} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{foodname}</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
        </div>
    )}
export default SProduct;