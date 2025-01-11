"use client"
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLocation } from '@/Redux/counters/LocationSlice';
import { usePathname } from 'next/navigation';

const Naveber = () => {
  const dispach = useDispatch()
  const partname = usePathname();

  useEffect(()=>{
    dispach(setLocation(partname))
  },[])

  return (
    <div>
    </div>
  )
}

export default Naveber