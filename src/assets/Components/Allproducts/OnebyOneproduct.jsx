import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bgchange, Countedproduct, Seturl } from "../../Route/Root";
import { TbRulerOff } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { removefromcart, removefromwishlist, settheme } from "../Utiily/Utility";
import { Dashboardcross } from "../DashBoard/Dashboard";
const OnebyOneproduct = ({ product,dashbord ,btnchange}) => {
  const { product_id,product_image,description, product_title, price, brand } = product;
const {page,setpage}=useContext(Seturl);
const {bgchange,setbg}=useContext(Bgchange);
const nevigate=useNavigate();
const {countwishcart,isdone,setcart,setwish}=useContext(Countedproduct);

const set=useContext(Dashboardcross);
// console.log(countwishcart,isdone)
// console.log(page,setpage)
  return (
    <div className={`bg-white  shadow-md  overflow-hidden h-full  ${dashbord ?`flex flex-col md:flex-row justify-between  gap-y-5 md:gap-y-0 gap-x-5 py-5 px-5 rounded-lg` :'flex flex-col rounded-xl '} pb-3`}>
      {/* Image with fixed height */}
      <div className={`${dashbord ? ' w-full    md:w-[30%] h-40 py-0 px-0 md:py-2 md:px-2' : 'w-full h-40  '}   hover:scale-105 hover:opacity-70  transition-all duration-300 ease-in-out`}>
        <img
          src={product_image}
          alt={brand || product_title}
          className={` w-full h-full object-cover  ${dashbord?'rounded-2xl ':'rounded-t-md '} `}
        />
      </div>

      {/* Content grows to fill */}
      <div className={`${dashbord ?'flex flex-row ' :'flex flex-col flex-1'} pl-2  flex flex-col flex-1`}>
        <div className={`${dashbord && ' flex flex-col justify-center'}`}>
          <h2 className="text-md font-semibold  text-gray-700">{product_title}</h2>
          
{
  dashbord &&                  <p className="text-gray-600 font-normal mt-1 mb-1">{description} </p>
}
          <p className="text-gray-600 mt-1 mb-1  font-bold">Price: ${price} Tk</p>
        </div>

        {/* Button always at bottom */}
        <div className={`${dashbord? ` w-1/3 flex justify-end ml-auto mt-auto md:mt-5` :`mt-auto`}`}>
         {
          dashbord  ?<button onClick={()=>{ 
            setpage(`TechSphere|Details|${product_title}`);
             (set=="cart" && removefromcart(product_id) );
             (set=="wishlist" && removefromwishlist(product_id)) ;
             (set=="cart" ?btnchange("cart") : btnchange("wishlist"));
            ( set=="cart" && setcart(prev=>prev-1));
             ( set=="wishlist" && setwish(prev=>prev-1)); }} className={`   border ${dashbord ? ' w-fit h-fit bg-red-400 px-0 py-0 rounded-full' :' btn rounded-2xl bg-white py-2'} border-[#9538E2] text-[#9538E2]    font-semibold`}>
<img width="24" height="24" src="https://img.icons8.com/ios-glyphs/50/FFFFFF/multiply.png"   alt="multiply"/>
             </button> 
             
             
             
             :<button onClick={()=>{nevigate(`/details/${product_id}`);
             setpage(`TechSphere|Details|${product_title}`);
             settheme(true)
             }} className={` btn shadow-none rounded-xl border  border-[#9538E2] text-[#9538E2] text-md bg-white  font-semibold`}>
             View details</button>
         }
              {/* <RxCross2 /> */}
        </div>
      </div>
    </div>
  );
};

export default OnebyOneproduct;
