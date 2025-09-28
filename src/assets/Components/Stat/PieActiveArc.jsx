import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import MyMap from './MyMap';
import data from './try';
import 'leaflet/dist/leaflet.css';

export default function BasicPie() {
  // Convert data to PieChart format
  // const pieData = data.map((item) => ({
  //   label: item.product_title,
  //   value: item.price,
  // }));

 

  return (
   
 <div className='w-full flex flex-col  bg-gradient-to-b from-60% from-[#9538E2] to-40% to-[#bg-[#9538E2]]  py-10     '>
        <div className='flex  flex-col items-center   z-1 '>
        <div className='w-10/12 mx-auto flex flex-col items-center space-y-3 md:space-y-5'>
            <div className=" text-3xl md:text-4xl font-extrabold text-center leading-10 md:leading-8">Product Availability</div>
        <div className=" text-lg md:text-xl font-medium text-center leading-6 md:leading-8 mb-5">Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</div>

        </div>
        </div>


         <div className='text-xl shadow-2xs font-bold w-full md:w-1/2 mx-auto  bg-white rounded-xl'>
        <PieChart
          series={[
            {
              data: data,
            },
          ]}
          width={300}
          height={300}
        />
      </div>
        </div>

     

   
  );
}
