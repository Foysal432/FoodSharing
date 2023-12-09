import { Card, Typography } from "@material-tailwind/react";
// import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AiFillDelete,AiFillEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import { useState } from "react";
import toast from "react-hot-toast";
const TABLE_HEAD = ["Name", "Quantity", "Location","ExpireDate"];
 

 
const ManageFood =()=> {
    const foods = useLoaderData()
  console.log(foods);
const [data,setData]=useState(foods)
// delete
const handleDelate = _id => {


  Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
      if (result.isConfirmed) {
          fetch(`https://foodsharing-delta.vercel.app/addfoods/${_id}`, {
              method: 'DELETE',

          })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                    toast.success('Successfully toasted!')
                      const remaining = foods.filter(users => users._id !== _id)
                      setData(remaining)

                  }
              })
      }
  })

}





  return (
    <Card className="h-full w-full overflow-scroll bg-green-300">
      <table className="w-full max-w-4xl mx-auto text-center table-auto ">
        <thead>
          <tr className="grid grid-cols-1 lg:flex">
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {data?.map(({foodname,pickuplocation,expiredtime,foodquantity,_id}) => (
            <tr key={name} className="even:bg-blue-gray-50/50 grid grid-cols-1 lg:flex">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {foodname}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {foodquantity}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {pickuplocation}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {expiredtime}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  <button onClick={()=>handleDelate (_id)}><AiFillDelete></AiFillDelete></button>
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                 <Link to={`/update/${_id}`}><button><AiFillEdit></AiFillEdit></button></Link>
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  <button>Manage</button>
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
export default ManageFood;