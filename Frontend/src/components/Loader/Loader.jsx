import React from 'react'
import { Hourglass } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div
        className='w-full h-[45vh] flex justify-center items-center'
    >
        <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperClass=""
            colors={['#2db12d', '#72a1ed']}
        />
    </div>
  )
}

export default Loader