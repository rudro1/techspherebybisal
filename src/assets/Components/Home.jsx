import React, { useContext, useRef } from 'react';
import Banner from './Banner/Banner';
import Box from './Box/Box';
import Allproducts from './Allproducts/Allproducts';
import { Seturl } from '../Route/Root';
const Home = () => {
   const scrolltarget=useRef(null);
   const scroll=()=>{
if(scrolltarget.current)
{
    scrolltarget.current.scrollIntoView({behavior:"smooth"})
}
console.log(scrolltarget.current);
}

   
    return (
        <div>
        <div  className=''>
        <Banner scroll={scroll}></Banner>
        
        </div>
<Allproducts ref={scrolltarget}></Allproducts>
        </div>
    );
};

export default Home;