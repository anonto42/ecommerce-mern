import React from 'react';
import { MdHighQuality } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbTruckDelivery } from "react-icons/tb";

const WhyUs = () => {
  return (
    <div 
        className='w-full min-h-[5vh] mb-6'
    >
        <div
            className='max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 xl:px-0 h-full'
        >
            <h1
                className='text-topBarTextColor text-2xl sm:text-3xl md:text-4xl font-semibold font-serif'
            >
                Why Us?
            </h1>
            <div
                className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
            >
                <div
                    className='w-full md:w-[98%] min-h-[200px] border mt-4 rounded-xl text-topBarTextColor border-topBarTextColor bg-navebarBgColor p-5'
                >
                    <div
                        className='text-5xl'
                    >
                        <MdHighQuality />
                    </div>
                    <div>
                        <h2
                            className='text-xl font-semibold font-serif my-1'
                        >High Quality</h2>
                        <p
                            className='text-sm font-light'
                        >
                            Our products are made with the highest quality materials and crafted by skilled craftsmen.
                        </p>
                    </div>
                </div>
                <div
                    className='w-full md:w-[98%] min-h-[200px] border mt-4 rounded-xl text-topBarTextColor border-topBarTextColor bg-navebarBgColor p-5'
                >
                    <div
                        className='text-5xl'
                    >
                        <TfiHeadphoneAlt />
                    </div>
                    <div>
                        <h2
                            className='text-xl font-semibold font-serif my-1'
                        >Support</h2>
                        <p
                            className='text-sm font-light'
                        >
                            12/6 support means a support service that is provided 12 hours a day and 6 days a week.
                        </p>
                    </div>
                </div>
                <div
                    className='w-full md:w-[98%] min-h-[200px] border mt-4 rounded-xl text-topBarTextColor border-topBarTextColor bg-navebarBgColor p-5 hidden xl:block'
                >
                    <div
                        className='text-5xl'
                    >
                        <TbTruckDelivery />
                    </div>
                    <div>
                        <h2
                            className='text-xl font-semibold font-serif my-1'
                        >Delivery</h2>
                        <p
                            className='text-sm font-light'
                        >
                            We promise fast, reliable delivery for every order. Your satisfaction is our priority, ensuring secure packaging and timely arrival. Whether near or far, we deliver with care, so you can enjoy our products hassle-free. Quality service, right to your door!
                        </p>
                    </div>
                </div>
            </div>
            <div
                    className='md:w-[50%] w-full mx-auto min-h-[200px] border mt-2 rounded-xl text-topBarTextColor border-topBarTextColor bg-navebarBgColor p-5 xl:hidden'
                >
                    <div
                        className='text-5xl'
                    >
                        <TbTruckDelivery />
                    </div>
                    <div>
                        <h2
                            className='text-xl font-semibold font-serif my-1'
                        >Delivery</h2>
                        <p
                            className='text-sm font-light'
                        >
                            We promise fast, reliable delivery for every order. Your satisfaction is our priority, ensuring secure packaging and timely arrival. Whether near or far, we deliver with care, so you can enjoy our products hassle-free. Quality service, right to your door!
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default WhyUs