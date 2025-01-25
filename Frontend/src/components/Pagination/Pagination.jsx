import React, { useState } from 'react'
import PaginationBar from './PaginationBar'

const Pagination = ({products}) => {
    const array = [1,2,3,4,5,6,7,8,"..."]
    const [pages,setPage] = useState(1)
    console.log(pages)
  return (
    <div
        className='w-full min-h-[74vh]'
    >
        <PaginationBar page={pages} array={array} setPage={setPage} />
    </div>
  )
}

export default Pagination