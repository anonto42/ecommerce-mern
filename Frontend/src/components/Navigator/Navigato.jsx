import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import ItemsOfNavigation from './ItemsOfNavigation';

const Navigato = ({name="Catagorys",items=["T-shirt","Poto-shirt",'Shirt',"Pant"]}) => {
    const [yes,setYes] = useState(false);
  return (
    <div 
        className='flex w-full h-full relative' 
        onMouseOver={()=>setYes(true)}
        onMouseLeave={()=>setYes(false)} 
        onClick={()=>setYes(!yes)}>
        <h2 className=''>{name}</h2>
        <IoMdArrowDropdown className='mt-[4px] text-[25px]' />

        {/* {
            yes? <ItemsOfNavigation item={items} on={yes} /> : <></>
        } */}

        <ItemsOfNavigation item={items} on={yes} />

    </div>
  )
}

export default Navigato