import React from 'react'
import { Hourglass} from 'react-loader-spinner'

const ScreenBeforeMounted = () => {
  return (
    <div
      className='w-full min-h-svh bg-[#a5a2a2] flex justify-center items-center'
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

export default ScreenBeforeMounted