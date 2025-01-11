"use client"
import React from 'react';
import type { RootState } from '@/Redux/store';
import { useSelector} from 'react-redux';

const page = () => {
  const { location } = useSelector((state: RootState)=> state.isHome)

  return (
    <div>

    </div>
  )
}

export default page