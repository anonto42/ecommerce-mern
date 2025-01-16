import React, { useState } from 'react'

const SideBarForMobile = () => {
  const [bar,setBar] = useState(true)
  return (
    <div className={'absolute w-[50%] h-svh bg-mainIconColor z-[99] right-0 duration-150 ease-in-out'}>
        
    </div>
  )
}

export default SideBarForMobile