import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const MainLayout = ({children}) => {
  const {user,logout} =useAuth()

  const handlelogout =()=>{
    logout()
    .then()
    .catch()
  }
    const MenuNav =<>
    <li><a><NavLink to='/' className={({isActive})=>isActive? "btn btn-outline btn-accent text-white font-serif":"btn btn-ghost font-serif"} >Home</NavLink></a></li>
    <li><a><NavLink  to='showall' className={({isActive})=>isActive? "btn btn-outline btn-accent font-serif":"btn btn-ghost font-serif"}>Available Foods</NavLink></a></li>
    <li><a><NavLink to='addfood' className={({isActive})=>isActive? "btn btn-outline btn-accent font-serif":"btn btn-ghost font-serif"}>Add Food</NavLink></a></li>
    <li><a><NavLink to='managefood' className={({isActive})=>isActive? "btn btn-outline btn-accent font-sans":"btn btn-ghost font-serif"}>Manage My Foods</NavLink></a></li>
    <li><a><NavLink to='requestfood' className={({isActive})=>isActive? "btn btn-outline btn-accent font-serif":"btn btn-ghost font-serif"}>My Food Request</NavLink></a></li>
    {/* <li><a><NavLink to='login' className={({isActive})=>isActive? "btn btn-outline btn-accent":"btn btn-ghost"}>Login</NavLink></a></li> */}
    </>
    return(
        <div>
           <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col ">
    {/* Navbar */}
    <div className="w-full navbar bg-green-400">
   <div className="w-full max-w-6xl mx-auto">
   <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2"><img className="w-3/4 invisible md:visible" src="https://i.ibb.co/0hnb6p0/1200px-Foodsharing-Logo-dunkel-Gabel.png" alt="" /></div>
      <div className="flex-none hidden lg:block">
        <ul className="menu-horizontal">
          {/* Navbar menu content here */}
       {
        MenuNav
       }
        </ul>
      </div>
      <div className="dropdown">
  <label tabIndex={0} className=" ">{
user ? <img className="w-10 mx-4 rounded-lg" src={user.photoURL} alt="" />:<img className="w-1/3" src="https://i.ibb.co/d0zDYB5/images.png" alt="" /> 
}</label>
  <ul tabIndex={0} className="dropdown-content z-[1] bg-green-400 menu p-2 shadow rounded-box">
     {
      user?  <li><a><button onClick={handlelogout}>Log Out</button></a></li>
      :
      <li><a><Link to='login'>Log In</Link></a></li>
    }
  </ul>
</div>
   </div>
    </div>
    {/* Page content here */}
   {children}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
    {
        MenuNav
    }
    </ul>
    
  </div>
</div>
        </div>
    )}
export default MainLayout;