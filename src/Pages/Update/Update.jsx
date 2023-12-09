import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Update = () => {
    const datas = useLoaderData()
    const {_id,pickuplocation,foodstatus,foodquantity,foodname,foodimage
        ,expiredtime,email,donatorname,donatorimage
        ,additionalnotes} = datas
    console.log(datas);
    const handleupdate = event =>{
        event.preventDefault()
        const form = event.target;
        const foodimage = form.foodimage.value;
        
        const foodname= form.foodname.value;
        const foodquantity = form.foodquantity.value;
        const additionalnotes= form.additionalnotes.value;
        const pickuplocation = form.pickuplocation.value;
        console.log(foodimage,foodname,foodquantity,additionalnotes,pickuplocation)
        const allItem ={foodimage,foodname,foodquantity,additionalnotes,pickuplocation}
        console.log(allItem);

              // send data to the server
       fetch(`https://foodsharing-delta.vercel.app/addfoods/${_id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(allItem)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
       if (data.modifiedCount > 0) {
        toast.success('Successfully updated!')
       }
    })
    }
    return(
        <div>
        <div className="bg-gray-300 shadow-md w-4/5 mx-auto mt-10 rounded-md">
            <h1 className="text-center text-4xl font-bold py-4 text-orange-500">Update Your Product</h1>
            <form onSubmit={handleupdate} >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4">
                    <div className="w-full">
                        <h1 className="text-2xl font-bold p-2">Image:</h1>
                        <input type="text"  name="foodimage" defaultValue={foodimage} className="input input-bordered input-success w-full" />
                    </div>
                    {/* 2nd */}
                    <div className="w-full">
                        <h1 className="text-2xl font-bold p-2">Name:</h1>
                        <input type="text"  defaultValue={foodname} name="foodname" className="input input-bordered input-success w-full" />
                    </div>
                    {/* 3rd */}
                    <div className="w-full">
                        <h1 className="text-2xl font-bold p-1">Quantity</h1>
                        <input type="text" name="foodquantity" defaultValue={foodquantity}  className="input input-bordered input-success w-full" />
                    </div>
                    {/* 4rth */}
                    <div className="w-full">
                        <h1 className="text-2xl font-bold p-1">Pickuplocation:</h1>
                        <input type="text" defaultValue={pickuplocation} name="pickuplocation" className="input input-bordered input-success w-full" />
                    </div>
                    {/* 5th */}
                    <div className="w-full">
                        <h1 className="text-2xl font-bold p-2">Additional Notes:</h1>
                        <input type="text"  defaultValue={additionalnotes} name="additionalnotes" className="input input-bordered input-success w-full" />
                    </div>
                    {/* 6th */}
                </div>
                <input className="btn btn-secondary w-full bg-orange-500" type="submit" value="Submit  Now" />
            </form>
        </div>
    </div>
    )}
export default Update;