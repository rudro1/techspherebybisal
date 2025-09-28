import React from 'react';
import { Link } from 'react-router-dom';


import Box from '../Box/Box';
import { Navbarcontext } from '../../Route/Root';
const Banner = ({scroll}) => {
  const {navbar,setnavbar,triggerHeight}=React.useContext(Navbarcontext);

  console.log(navbar,triggerHeight)
    return (
      <div id={`${triggerHeight}`} className=' w-full overflow-hidden   mb-10 pb-5  bg-gradient-to-b from-85% to-15% md:from-70% from-[#9538E2] md:to-30% to-[#fff]  bg-red-400 '>
          <div className='w-full h-fit flex flex-col      rounded-b-2xl'>
        <div className='flex  flex-col items-center   pb-10 z-1 '>
        <div className='w-10/12 mx-auto flex flex-col items-center space-y-3 md:space-y-5'>
            <div className=" text-3xl md:text-5xl font-extrabold text-center leading-10 md:leading-15">Upgrade Your Tech Accessorize with <br /> <span className=''>TechSphere</span> Accessories</div>
        <div className=" text-lg md:text-xl font-medium text-center leading-6 md:leading-8">Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</div>
                    <div className=" btn text-center text-lg font-bold text-[#9538E2] bg-white rounded-full outline-white btn-outline  border-none" onClick={()=>{scroll()}}>Shop Now</div>
      
        
        </div>
           </div>
     
    
     
   <div   className=''>
          <Box></Box>
</div>
     </div>

    
      </div>

    );
};

export default Banner;