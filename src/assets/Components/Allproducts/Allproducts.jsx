import React, {  createContext, forwardRef, useEffect, useState } from 'react';
import Box from '../Box/Box';
import OnebyOneproduct from './OnebyOneproduct';
import Catagorybtn from './Catagorybtn';
export const Catagorycontext=createContext({});
import { motion } from 'framer-motion';
import { s } from 'framer-motion/client';
const Allproducts = forwardRef((props,ref) => {
    const [store,setstore]=useState([]);
    const [catagory,setcatagory]=useState([]);
    const [names,setnames]=useState([]);
    const [istrue,settrue]=useState(false)
    const [count,iscount]=useState(3);
 
    useEffect(()=>{
let timeinterval;
if(istrue)
{
     timeinterval=setInterval(() => {
    iscount(old=> old<=3 ? old+1:clearInterval(timeinterval) )
}, 1000);
}
{
 iscount(3)
}

return ()=> clearInterval(timeinterval);
    },[istrue])
    // let num=istrue;
    console.log(count)
    useEffect(()=>{

fetch('/ALLdetails.json')
.then(res=>res.json())
.then(data=>{
  
  setstore(data);
  
setcatagory(data);

 })

    },[])


let catagoryname=[...store];
console.log(catagoryname)
catagoryname.filter((catagory,idx)=>{

if(!names.includes(catagory.category))
{
    let newnames=[...names];
    newnames.push(catagory.category);
    setnames(newnames);
    
}
  
})
console.log(names)

//     useEffect(()=>{

// let catagoryname=[...store];
// let newname=[...names];
// catagoryname.forEach((store,idx)=>{
// if(!newname.includes(store.category))
// {
//     newname.push(store);
//     setnames(newname);
// }
// else
// {
//   console.log(store)
// }

// }


// )



// },[store])
   
//  console.log(names)

//    const [catagorybyname,setname]=useState("");
      // category
      const clickCatagory=(catagoryname)=>{
if(catagoryname=="all")
{
    setstore(catagory)
    settrue(true)

// console.log("all");
    
}
else{

let catagroizedarray=[...catagory];
catagroizedarray=catagroizedarray.filter(products=>products.category==catagoryname );
setstore(catagroizedarray);
}

      }

// console.log(catagory)
//     const sortbytype=()=>{
//         let newarray=[...store];
//         newarray=newarray.sort((a,b)=>{

// if(a.category=="MacBook")
//     {
//         return -1;
//     }  ;

//         })
// console.log(newarray)
//       setstore(newarray) 
//     }
//     console.log(istrue)


    return  <div  ref={ref} onPointerEnter={()=>settrue(true)}   className='bg-[#09080F0D] overflow-hidden  py-5 '>
           <div className="text-3xl font-bold text-[#0B0B0B] text-center py-5">Explore Cutting-Edge Gadgets</div>
           {/* <button className='bg-red-400' onClick={()=>catagorybytype()}>click</button> */}
          <div className= ' w-11/12 mx-auto  grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-5 py-5 '>
            <div>
<div className=' md:col-span-1  lg:col-span-2'>
<Catagorycontext.Provider value={clickCatagory}>
<div className='flex flex-col gap-y-5 rounded-lg shadow-2xs bg-white py-5 px-5 md:w-full lg:w-3/4  items-stretch '>

       <p  onClick={()=>{clickCatagory("all"),settrue(true)}} className='btn btn-sm w-1/2 text-md first:bg-[#9538E2] py-2 pr-5 pl-5 flex justify-self-end font-bold   first:text-white bg-[#09080F0D] text-gray-700  border-none rounded-2xl'>
          All
        </p>
{
    names.map((names,idx)=>{
      
     
      
   return  <Catagorybtn key={idx} category={names}></Catagorybtn> 
    
      
      
  
    
    })
}

   </div>  
   </Catagorycontext.Provider>
   </div>       </div>


            <div className='md:col-span-2 lg:col-span-3  transition-all'>

  <motion.div
  layout
  className={`grid gap-5  grid-cols-1 md:grid-cols-${count || 3} lg:grid-cols-${count || 4} `} // 🔑 ensures all grid cells are equal
 
  transition={{ duration: 0.5 }}
>
  {store.map(store => (
    <motion.div
      layout
      key={store.product_id}
      transition={{ duration: 1 }}
      className="h-full"  // 🔑 child also fills height
    >
      <OnebyOneproduct product={store} />
    </motion.div>
  ))}
</motion.div>
            </div>
          </div>
         
        </div>
   
} );

export default Allproducts;