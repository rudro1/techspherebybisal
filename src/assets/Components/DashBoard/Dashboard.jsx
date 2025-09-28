import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getcard, getwishcard, settheme } from '../Utiily/Utility';
import OnebyOneproduct from '../Allproducts/OnebyOneproduct';
import { createContext } from 'react';
import { motion } from 'framer-motion';
import { PiSortAscendingFill } from "react-icons/pi";
import { Countedproduct, Navbarcontext } from '../../Route/Root';
export const Dashboardcross=createContext("");




  

const Dashboard = () => {
 const {trigger}=useContext(Navbarcontext)
const nevigate=useNavigate();
    const [set,issetbtn]=useState(" ");
   const [disabled,setdisabled]=useState(true);
    const[total,settotal]=useState(0);
        const loader=useLoaderData();
    const [byclicknewvalue,setvalue]=useState([])


     const [dashbord,isdashbord]=useState(false); //i dont know why it works but i make it :)
     const [removeitem,isremove]=useState(false);
const[totalofcart,settotalofcart]=useState(0);
const {setcart,setwish}=useContext(Countedproduct);
const hashitems=  byclicknewvalue.length>0;
   useEffect(()=>{



  if(removeitem)
     {
     const getcartdata=getcard();
let newarray=[...loader];
newarray=getcartdata.map(id=>newarray.find(data=>parseInt(data.product_id)===parseInt(id)))
setvalue(newarray)
isremove(false);
     }

   },[removeitem])



   useEffect (()=>{
    settotalofcart(byclicknewvalue.reduce((acc, product) => acc + product.price, 0));
   },[byclicknewvalue])

    const btnchange=(type)=>{
        setdisabled(false);
if(type==="cart")
{
    issetbtn(type)
    const getcartdata=getcard();
let newarray=[...loader];
newarray=getcartdata.map(id=>newarray.find(data=>parseInt(data.product_id)===parseInt(id)))
setvalue(newarray)


// console.log(totalofcart)
// settotal(totalofcart)
isdashbord(true)
    // issetbtnforall(false);
}
else if(type==="wishlist")
{
       issetbtn(type)
        // issetbtnforall(true);
       const getwishlistdata=getwishcard();
        let newarray=[...loader];
newarray=getwishlistdata.map(id=>newarray.find(data=>parseInt(data.product_id)===parseInt(id)))
setvalue(newarray)
isdashbord(true)
}
else 
{
    //  issetbtn("cart")
    isdashbord(false)
}
    }
   

   const sortbyprice=()=>{
  
    let sortbyprices=[...byclicknewvalue];
    sortbyprices=sortbyprices.sort((a,b)=>a.price>b.price ?-1 :1)
   setvalue(sortbyprices);
   }

   
    return (
        <div>

          <div className='w-full flex flex-col bg-[#9538E2]  py-10      '>
        <div className='flex  flex-col items-center   z-1 '>
        <div className='w-10/12 mx-auto flex flex-col items-center space-y-3 md:space-y-5'>
            <div className=" text-3xl md:text-4xl font-extrabold text-center leading-10 md:leading-8">Dashboard</div>
        <div className=" text-lg md:text-xl font-medium text-center leading-6 md:leading-8">Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</div>
<div className='flex  gap-x-2'>
            <div onClick={()=>btnchange("cart")} className={` ${set=="cart" ? 'bg-transparent text-white border-1 border-white':'bg-white'}  px-5 py-1 text-center shadow-none text-lg font-bold text-[#9538E2]  rounded-full outline-white btn-outline  border-0`}>Cart</div>
        <div onClick={()=>btnchange("wishlist")} className={`${set=="wishlist" ? 'bg-transparent text-white border-1 border-white':'bg-white'} px-10 py-1  shadow-none text-center text-lg font-bold text-[#9538E2]  rounded-full outline-white btn-outline  border-0`}>Wishlist</div>
</div>
        </div>
        </div>
        
        </div>
<div className='bg-[#ECECEC]'>
{

hashitems ? <div className={` flex-wrap flex gap-3 flex-col  md:flex-row md:justify-between items-center w-11/12 mx-auto py-5  `}>
    <div className="text-lg text-black font-bold"> {set=="cart"? 'Cart' :'WishList' }</div>
<div className='flex flex-col  gap-3 md:flex-row items-center gap-x-5'>  
      <div  className={`  ${hashitems ?'block' : 'hidden'}  text-lg text-black font-bold`}>Total cost:{totalofcart} Tk</div>

<div className='flex gap-x-3  gap-y-3 md:gap-y-0  '>
     <div onClick={()=>{sortbyprice()}} className={` btn lg:btn-md md:btn-md btn-sm  bg-white px-5 py-1 text-center shadow-none text-lg font-bold text-[#9538E2]  rounded-full outline-white border-[#9538E2]  border-1 flex items-center gap-x-2`}>Sort By Price<PiSortAscendingFill /></div>
 <div  disabled={disabled} className={` btn lg:btn-md md:btn-md btn-sm bg-white px-5 py-1 text-center shadow-none text-lg font-bold  bg-gradient-to-tl from-70% from-[#9538E2] text-white to-40% to-white rounded-full outline-white border-[#9538E2]  border-1 `}> <a href="#my_modal_8">Purchase</a> </div>
</div>
 </div>
</div>

: <div className=' text-2xl font-bold text-center text-gray-400 py-10'>No items added yet</div>



}
<Dashboardcross.Provider value={set}>

<div id={`${trigger}`} className='grid grid-cols-1 md:w-8/12 py-5 gap-5 mx-auto '>
    {
    byclicknewvalue.map((Allproducts,id) => <OnebyOneproduct key={id} product={Allproducts} dashbord={hashitems}  btnchange={btnchange}></OnebyOneproduct> )
    }
</div>
</Dashboardcross.Provider>
</div>

{/* The button to open modal */}


{/* Put this part before </body> tag */}
<motion.div layout  className="modal  text-black ease-in-out  transition-shadow duration-100" role="dialog" id="my_modal_8">
  <div className="modal-box bg-white w-1/2">
   <div className='flex flex-col  items-center'>
     <img src="/image/success.png" alt="" />
    <h3 className="text-lg font-bold">Payment Successfully!</h3>
    <p className="py-1 font-medium text-lg text-gray-400">Thanks for purchasing</p>
    <p className="py-1 font-light text-lg text-gray-400">Total Cost :{totalofcart} Taka </p>
    <div className="modal-action w-full ">
      <a href="#" onClick={()=>{
 (set=="cart" && (
localStorage.removeItem("card") ,setcart(prev=>0),setvalue([]) ));
 (set=="wishlist" && (
localStorage.removeItem("wishlist") , setwish(prev=>0)),setvalue([]));

settheme(false)
nevigate('/');


      }} className="btn uppercase w-full text-lg text-black bg-gray-200 rounded-2xl px-5">close!</a>
   </div>
    </div>
  </div>
</motion.div>
        </div>
    );
};

export default Dashboard;
