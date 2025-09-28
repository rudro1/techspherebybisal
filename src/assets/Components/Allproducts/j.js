
let x=[{
    cata:'a',

},
{
    cata:'b',
}

,{
    cata:'c',
},{
    cata:'a',
},{
    cata:'b',
},{
    cata:'d',
}   
]
let y=[];

// x.map((value,idx)=>{

// //    if(!y.includes(x[idx].cata[idx])) 
// //    {
// //     y.push(x[0].cata[idx])
// //    }
// console.log(x[0].cata[idx]);
// idx++;
// })
console.log(y);
// for(let i in x)
// {
//     console.log(typeof(x[i].cata))
// }
x.forEach((value,idx)=>{
    console.log(value.cata);
    y.includes(value.cata) || y.push(value.cata);
})
console.log(y);