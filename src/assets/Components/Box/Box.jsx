import React from 'react';

const Box = () => {
    return (
       <div className=' w-full  flex justify-center -z-0'>
        <div className='  w-3/4 md:h-[400px]   border-1 p-5 rounded-xl border-white'>
        <img src={  "/image/banner.jpg"} alt="" className='w-full h-full object-cover' />
     </div>


     </div>

    //   <div className='absolute top-[80%]   md:top-[70%] w-full  flex justify-center -z-0'>
    //     <div className='  w-3/4 md:h-[400px]   border-1 p-5 rounded-xl border-white'>
    //     <img src={  "/public/image/banner.jpg"} alt="" className='w-full h-full object-cover' />
    //  </div>


    //  </div>
    );
};

export default Box;