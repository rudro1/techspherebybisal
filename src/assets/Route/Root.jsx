import React, { createContext, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
export const Seturl=createContext("Welcome to our website TechSphere");
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Ai from '../Components/Chatbot/Ai';
import { getcard, gettheme,  getwishcard,  settheme } from '../Components/Utiily/Utility';

import PieActiveArc from '../Components/Stat/PieActiveArc'; 
export const Bgchange=createContext(false);
export const Countedproduct=createContext([]);
export const Navbarcontext=createContext(false);
const Root = () => {
     const location=useLocation();
    const [page,setpage]=useState("welcome To TechSphere ");
    const [countwishcart,isdone]=useState(false);
    const [wishlist,setwish]=useState(prev=>parseInt(getwishcard().length));
    const[cartlist,setcart]=useState(prev=>parseInt(getcard().length));
    const [navbar,setnavbar]=useState(false);
    const [bgchnage,setbg]=useState();


    useEffect(()=>{

   
// setpage(prev=>{`welcome to ${}`})



    let locname=location.pathname;
locname=(locname.slice(1)).toUpperCase()
 console.log(location.pathname=='/')
    setpage(`${locname}||TechSphere`)

if(location.pathname=='/')
{
    setpage('welcome To TechSphere ')
}

 
    },[location])
      useEffect(()=>{
document.title=page;
    },[page]);


console.log(countwishcart)
//     useEffect(()=>{

        
// // const gettheme=gettheme();
// let bg=bgchnage;
// if(bgchnage==true)
// {
// const setthemes=settheme(bg);
// }

 

useEffect(()=>{
    if(  location.pathname=='/')
{
  settheme(false)
  
// storetheme(true)
// storetheme(prev=> gettheme())
}

else 
{
   settheme(true) 
   setnavbar(false)
 
}
},[location])
 const triggerHeight = "trigger"
 useEffect(() => {
    // 👇 function runs on every scroll
    const handleScroll = () => {
      const triggerHeight = document.getElementById("trigger").offsetHeight;
      setnavbar(window.scrollY > triggerHeight);
    };

    // Add listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 


    // },[])
    // console.log(page)
    // console.log(bgchnage);
    return (
        <Navbarcontext.Provider value={{navbar,setnavbar,triggerHeight}}>
        <Countedproduct.Provider value={{countwishcart,isdone,cartlist,setcart,wishlist,setwish}}>
        <Bgchange.Provider value={{bgchnage,setbg}}>
        <Seturl.Provider value={{page,setpage}}>
        <div className='max-w-[1280px] mx-auto'>
            <Navbar></Navbar>

             <AnimatePresence mode="wait">
          
      <motion.div
  key={location.pathname}
  initial={{ opacity: 1, y: 5 }}   // small fade + move down
  animate={{ opacity: 1, y: 0 }}   // smooth to normal
  exit={{ opacity: 1, y: -5 }}    // fade out + move up
  transition={{ duration: 0.3, ease: "easeInOut" }} // quick and clean
  className="flex-1"
>
              <Outlet />
            </motion.div>
          </AnimatePresence>
          <Ai></Ai>
           <Footer></Footer>
       
        </div>
        </Seturl.Provider>
        </Bgchange.Provider>
        </Countedproduct.Provider>
        </Navbarcontext.Provider>
    );
};

export default Root;