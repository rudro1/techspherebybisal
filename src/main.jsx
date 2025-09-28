import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './assets/Route/Root'
import Home from './assets/Components/Home'
import Banner from './assets/Components/Banner/Banner'
import Box from './assets/Components/Box/Box'
import Allproducts from './assets/Components/Allproducts/Allproducts'
import Details from './assets/Components/Allproducts/Details/Details'
import Dashboard from './assets/Components/DashBoard/Dashboard'
import PieActiveArc from './assets/Components/Stat/PieActiveArc'
const router=createBrowserRouter([

{
path:'/',
element : <Root></Root>,
children: [

{
path: '/',
element : <Home></Home>

},

,
{
  path:'/details/:id',
  loader:(()=>fetch('/ALLdetails.json')),
  element : <Details></Details>
},

{
path:'/dashboard',
loader:(()=>fetch('/ALLdetails.json')),
element : <Dashboard></Dashboard>

},

{
  path:'/Statistic',
   loader: async () => {
    const res = await fetch('/ALLdetails.json');
    const data = await res.json();
    return data; // must return array
  },
  element: <PieActiveArc></PieActiveArc>

}
,

]
}
,







])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <RouterProvider router={router}/>
  </StrictMode>,
)
