"use client"
import React from 'react';
import { usePathname } from "next/navigation";

const page = () => {
  
  const partname = usePathname()
  console.log(partname)

  return (
    <div>page</div>
  )
}

export default page