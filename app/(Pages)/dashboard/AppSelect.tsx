import { Button } from '@/components/ui/button';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
type AppContextProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

// Create the context with an undefined default value
const AppContext = createContext<AppContextProps | undefined>(undefined);

// Create the provider component
const AppSelect = ({ children,value, setValue }:{children:React.ReactNode, setValue:React.Dispatch<React.SetStateAction<string>>,value:string}) => {
 

  return (
    <AppContext.Provider value={{ value, setValue }}>
      
      <select onChange={(e)=>{setValue(e.target.value)}} className=' w-[120px] h-[50px]'>
        {children}
      </select>
    </AppContext.Provider>
  );
};

const AppOptions: React.FC<{ CurrentOption: string; children: ReactNode }> = ({ CurrentOption, children }) => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('AppOptions must be used within an AppSelect');
  }


  return (

  
 
    <option >
      <div className=' bg-slate-900'  onClick={(e)=>{ 

e.preventDefault()
context.setValue(CurrentOption)
      }}>


      {children}
      </div>
    </option>
  
  );
};

// Export only the components
export { AppSelect, AppOptions };
