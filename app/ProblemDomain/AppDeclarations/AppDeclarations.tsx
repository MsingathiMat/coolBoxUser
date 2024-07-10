//ALL APP VARIABLES AND CONSTANTS, DO NOT DELETE THE CONTENT OD THIS FILE BECAUSE ITS A DEPENDENCT
//FOR THE APPDOMAIN

import { Default  } from "./CorrFunctions";
import Modal from "./Modal";



//This array is consumed by .... in the AppDomain
const NavItems:ListItems =[
   
    {
        itemLabel:<Modal/>,
       callBack:()=>{},
       className:" hover:text-AppPrimary",
       
       
    },
    {
        itemLabel:"FAQ",
       callBack:()=>{},
       className:" hover:text-AppPrimary"
       
    },
    {
        itemLabel:"Pricing",
       callBack:"/login",
       className:" hover:text-AppPrimary"
       
    },
    {
        itemLabel:"Support",
       callBack:"/login",
       className:" hover:text-AppPrimary"
       
    },
    {
        itemLabel:"Contact",
       callBack:"/login",
       className:" hover:text-AppPrimary"
       
    },
    
]


export {NavItems}