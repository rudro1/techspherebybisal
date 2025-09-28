const gettheme=()=>{
    const data=localStorage.getItem("theme");
    if(data)
    {
       const theme=JSON.parse(data);
return theme;
    }
    else 
    return false;
}
const settheme=(value)=>
       { let gettheme=(value);

        localStorage.setItem("theme",gettheme);

       }
const getcard=()=>{

    const card=localStorage.getItem("card");
    if(card)
    {
        let newcard=JSON.parse(card)
        return newcard
    }

    else
    {
        return []
    }
}

const setcard=(id)=>{
    const card=getcard();
    
    if(card.length<10)
// !card.includes(parseInt(id))&&
  {
      card.push(parseInt(id));
       let newcard=JSON.stringify(card);
localStorage.setItem("card",newcard);
   
  }
  else 
    {return true
    }
  
}

const getwishcard=()=>{

    const wishcard=localStorage.getItem("wishlist")
    if(wishcard)
    {
        return JSON.parse(wishcard)
    }
    else
        {
return []
    }
}

const setwishcard=(id)=>{
  const wishcard=getwishcard();

  if(wishcard.includes(parseInt(id)))
  {
    return true
  }
else {
    !wishcard.includes(parseInt(id))&&   wishcard.push(parseInt(id));
    let newcard=JSON.stringify(wishcard);
localStorage.setItem("wishlist",newcard);
}

}

const removefromcart=(id)=>{
     const card=getcard();
     let index=card.indexOf(id);
   let newcard=card.filter((card,idx)=>parseInt(idx)!=parseInt(index))  ;
   newcard=JSON.stringify(newcard);
localStorage.setItem("card",newcard);


}

const removefromwishlist=(id)=>{
     const card=getwishcard();
     let index=card.indexOf(id);
   let newcard=card.filter((card,idx)=>parseInt(idx)!=parseInt(index))  ;
   newcard=JSON.stringify(newcard);
localStorage.setItem("wishlist",newcard);


}



  export {gettheme,settheme,getcard,setcard,setwishcard,getwishcard,removefromcart,removefromwishlist}
