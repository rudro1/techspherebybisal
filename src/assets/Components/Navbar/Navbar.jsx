import React, { useContext, useEffect, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link, useLocation } from 'react-router-dom';
import { Bgchange, Countedproduct, Navbarcontext, Seturl } from '../../Route/Root';
import { getcard, gettheme, getwishcard, removefromcart, settheme } from '../Utiily/Utility';
import { toast } from 'react-toastify';
const Navbar = () => {
   const location=useLocation()
//  console.log(location)
const {bgchnage,setbg}=useContext(Bgchange);
const [card,setcard]=useState([]);
const [total,valueset]=useState(0);
// const [wishlists,setwish]=useState([]);
const [theme,storetheme]=useState();
const {navbar,setnavbar}=useContext(Navbarcontext);
useEffect(()=>{

fetch('/ALLdetails.json')
.then(res=>res.json())
.then(data=>
  
  {  const getcards=getcard();
let newcard=[...data];
newcard=getcards.map(id=>newcard.find(cards=>parseInt(cards.product_id)==parseInt(id)))
newcard=newcard.map(value=>value.price);
setcard(newcard);
  }

)

},[card])
const dashborad=()=>{






const total=card.reduce((p,c)=>p+c,0)

  valueset(total)

// console.log(newcard)



}
 

const {countwishcart,isdone,cartlist,wishlist}=useContext(Countedproduct);

   
    const Links = (
        <>
   <li onClick={()=>{settheme(false);
     
   }} className='text-lg'><Link to={`/`}>Home</Link></li>
      
        <li onClick={()=>{settheme(true);
 
        }} className='text-lg' ><Link to={'/Statistic'}>Statistics</Link></li>
       <li onClick={()=>{settheme(true);

         }  } className='text-lg'> <Link to={`/dashboard`}>Dashboard</Link></li>
        </>
    )
    return (
       <div className={`navbar rounded-t-2xl ${gettheme() ?'bg-white text-[#9538E2]' : 'bg-[#9538E2]'}  ${navbar ? 'fixed top-0 ' : 'static'} shadow-sm  z-50 transition-all duration-300`}>
  <div className="navbar-start">
   
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
     {Links}
      </ul>
    </div>
    <a className=" font-extrabold border-b-1 rounded-b-full  tracking-wider text-xl animate-pulse "><Link to={`/`}>TechSphere</Link></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {Links}
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-5">
 {/* <details className="dropdown">

  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">

  </ul>
</details> */}


 <div onClick={()=>dashborad()}  className="dropdown relative">
      <div  tabIndex={0} role="button" className=" flex rounded-full  ">

  <a   className="rounded-full flex items-center gap-1" ><img  width="24" height="24" src="https://img.icons8.com/forma-light/24/FFFFFF/fast-cart.png" alt="fast-cart " className='bg-[#9538E2] rounded-full'/><sup className='font-extrabold text-md'>{cartlist>=0 && cartlist }</sup></a>

      </div>
      <ul
        tabIndex={0}
        className="  absolute  dropdown-content right-0 shadow-2xl  text-black rounded-box z-1 b bg-gradient-to-r from-60% from-[#9538E2] to-40% to-white  mt-3 w-fit block h-fit p-2 ">
     
   <li onClick={()=>{settheme(true);
   

         }  } className='text-sm font-bold gap-x-2 flex flex-row items-center  text-teal-50 justify-between'> 
        <a href=""> Total:<span>{total}</span> Tk </a>
         <Link className='btn bg-white outline-none border-0 text-[#9538E2]' to={`/dashboard`}> Dashboard</Link>
       
         
         </li>
   
      </ul>
    </div>
    <a className="rounded-full flex items-center gap-1"><img width="20" height="20" src="https://img.icons8.com/material-rounded/24/FFFFFF/filled-like.png" alt="filled-like" className='bg-[#9538E2] '/><sup className='font-extrabold text-md'>{wishlist>=0 && wishlist  }</sup></a>
  </div>
</div>
    );
};

export default Navbar;