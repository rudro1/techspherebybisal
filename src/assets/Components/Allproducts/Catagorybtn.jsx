import { useContext, useEffect } from "react";
import { Catagorycontext } from "./Allproducts";


const Catagorybtn = ({category}) => {
   
    const clickCatagory=useContext(Catagorycontext);
  useEffect(() => {
    // select all .btn buttons on page
    const buttons = [...document.getElementsByClassName("btn")];

    const handleClick = (e) => {
      // remove active class from all
      buttons.forEach((btn) => btn.classList.remove("active"));
      // add active to clicked
      e.currentTarget.classList.add("active");
    };

    // attach event listeners
    buttons.forEach((btn) => btn.addEventListener("click", handleClick));

    // cleanup
    return () => {
      buttons.forEach((btn) => btn.removeEventListener("click", handleClick));
    };
  }, []);
    // console.log(clickCatagory("hello"))
    return (
       
        <div  onClick={()=>clickCatagory(category)} className='btn text-md  first:bg-[#9538E2]   font-bold   first:text-white bg-[#09080F0D] text-gray-700  border-none rounded-2xl '>
          <p className="text-left">  {category}</p>
        </div>
 
    );
};

export default Catagorybtn;