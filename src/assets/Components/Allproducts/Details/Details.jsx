import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Countedproduct, Seturl } from '../../../Route/Root';
import Box from '../../Box/Box';
import { li } from 'framer-motion/client';
import { motion } from 'framer-motion';
import { CiHeart } from "react-icons/ci";
import { getcard, getwishcard, setcard, setwishcard } from '../../Utiily/Utility';

  import { ToastContainer, toast } from 'react-toastify';
const Details = () => {
 const {setcart,cartlist,wishlist,setwish}=useContext(Countedproduct);
const[disabled,setdisabled]=useState(false);
const [limit,setlimit]=useState(false);
const getdata=useLoaderData();
console.log(getdata);
const {id }=useParams();
const is=(type)=>{
if(  type=="cart" )
  {let getcards=getcard();
    getcards=parseInt(getcards.length);
setcart(prev=>getcards)


  limit && toast.error('Already Cross The  Limit!',{
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "",
className:'bg-red-800 text-white font-bold uppercase text-sm'  
})

   limit || toast.success('Items Added To Your Card!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "",
className:'bg-green-800 text-white font-bold uppercase text-sm'

});
}
if( type=="wish" )
 {let getcards=getwishcard();
    getcards=parseInt(getcards.length);
  setwish(prev=>getcards);
  

      disabled && toast.error('Already Added To Your Wishlist!',{
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "",
className:'text-red-800 bg-white font-bold capitalize text-sm'  
})
  disabled==false && toast.success('Items Added To Your Wishlist!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "",
className:'text-green-800 bg-white font-bold capitalize text-sm'

});





}
}
// console.log(cartlist,wishlist);
useEffect(()=>{

let x=[...document.getElementsByClassName("btn")]
x.forEach(btn=>btn.addEventListener("click",(e)=>{

x.forEach(btn=>btn.classList.remove("active"))
e.currentTarget.classList.add("active")

}))


},[])



let newgetdata=[...getdata];
newgetdata=newgetdata.find(product=>parseInt(product.product_id)===parseInt(id))

//console.log(newgetdata)
const {product_id,product_title,product_image,specification,description,rating,price,availability,brand}=newgetdata;
//console.log(product_id,product_title,product_image);
const location=useLocation();
const {setpage}=useContext(Seturl);
try {
  if(location.pathname==`/details/${product_id}`)
{
  setpage(`Techsphare|| ${product_title}`)
}
} catch (error) {
  console.log(error)
}


    return (

     
                
<div  className='pb-5 '>
          <div className='w-full flex flex-col  bg-gradient-to-b from-60% from-[#9538E2] to-40% to-[#bg-[#9538E2]]  py-10     '>
        <div className='flex  flex-col items-center   z-1 '>
        <div className='w-10/12 mx-auto flex flex-col items-center space-y-3 md:space-y-5'>
            <div className=" text-3xl md:text-4xl font-extrabold text-center leading-10 md:leading-8">Product Details</div>
        <div className=" text-lg md:text-xl font-medium text-center leading-6 md:leading-8 mb-5">Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</div>

        </div>
        </div>
        
          <div className=''>
        <div className=" shadow-lg w-full md:w-10/12 mx-auto py-1 md:py-5    bg-white   rounded-lg overflow-hidden h-fit flex flex-col items-center md:grid  grid-cols-5 pb-3">
      {/* Image with fixed height */}
      <div className=" col-span-2 h-[400px] w-full hover:scale-105 hover:opacity-70  transition-all duration-300 ease-in-out">
        <img
          src={product_image}
          alt={brand || product_title}
          className="w-full h-full object-cover py-3 px-3 md:rounded-2xl rounded-2xl  "
        />
      </div>

      {/* Content grows to fill */}
      <div className=" col-span-3 pl-2  flex flex-col flex-1 ">
        <div className="mb-2">
          <h2 className="text-lg font-semibold  text-black">{product_title}</h2>
          <p className="text-gray-600 font-semibold mt-1 mb-1">Price: ${price} Tk</p>
       <button  className=" py-1 px-3   rounded-2xl border border-green-800 bg-green-50  text-green-500 font-bold">
          In Stock
          </button>

                 <p className="text-gray-600 font-normal mt-1 mb-1">{description} </p>

                 <p className="text-black text-lg font-semibold mt-1 mb-1">Specification: </p>
                 <ol>
                    {

specification.map((specification,idx)=><li className='text-black text-lg' key={idx}>{idx==0 ? 1 :idx+1} . {specification}</li> )

                    }
                 </ol>
                       <p className="text-black font-bold  mt-1 mb-1 text-lg">Rating: ⭐  </p>
      
      <div className='flex items-center gap-x-2'>
 <span>⭐⭐⭐⭐</span>
   <button  className=" py-1 px-2 text-md font-extrabold  disabled:bg-amber-50  rounded-2xl border-1 border-green-800 bg-green-50  text-green-500 ">
    {rating}
          </button>
      </div>
     
        </div>

        {/* Button always at bottom */}
        <div className="mt-auto flex items-center gap-x-2">
         <button onClick={()=>{setlimit(setcard(product_id)) ;
          is("cart")}} className="btn flex items-center shadow-none py-2 rounded-2xl border-0     text-white bg-[#9538E2] font-semibold">
       
          <img  width="24" height="24" src="https://img.icons8.com/forma-light/24/FFFFFF/fast-cart.png" alt="fast-cart " className=''/>
             Add To Cart
          </button>
         <button onClick={()=>{
          setdisabled(setwishcard(product_id));

          is("wish");
    

         }}    className=" btn   shadow-none py-2 px-2 rounded-full border-2  hover:text-red-500 border-gray-300 bg-white text-black font-semibold">
        {/* <CiHeart className='text-2xl font-extrabold '></CiHeart> */}<img width="25" height="25" src="https://img.icons8.com/fluency-systems-regular/48/like--v1.png" alt="like--v1"/>
          </button>
        </div>
      </div>
    </div>
    </div>
        </div>
       
            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>

              
           

        </div>


    );
};

export default Details;