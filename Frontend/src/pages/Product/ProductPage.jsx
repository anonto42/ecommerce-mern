import React, { useState } from 'react'

import image1 from "/hero.jpg"
import image2 from "/hero2.jpg"
import image3 from "/hero3.jpg"
import { useSelector } from 'react-redux'
import { MdStar } from 'react-icons/md'

const ProductPage = () => {
  const {products} = useSelector( e => e.applicationData.appData )
  const img = [
      image1, image2, image3
    ]
  console.log(products)
  const [image,setImage] = useState(img[0])
  const [imgLoaction,setImageLocation] = useState(1)
  const [load,setLoad] = useState(false)
  return (
    <div
      className='w-full min-h-svh'
    >
      <div
        className='lg:max-w-[1400px] w-full mx-auto h-full lg:flex lg:mt-16'
      >
        <div
          className='w-full h-auto px-4 pt-4'
        >
          <img 
            src={image} 
            alt="#" 
            loading='lazy'
            onLoad={()=>setLoad(true)}
            className='w-[350px] md:w-[450px] md:h-[550px] mx-auto h-[450px] border-2 border-mainIconColor rounded-md overflow-hidden'
          />
          {
            !load?(
              <div 
                className='w-[320px] md:w-[450px] md:h-[550px] mx-auto h-[350px] bg-slate-100 border-2 border-mainIconColor rounded-md overflow-hidden'
              ></div>
            ):(<></>)
          }
          <div
            className='w-full pt-4 flex justify-center items-center'
          >
            <div
              className='flex'
            >
              <div
                onClick={()=>{setImage(img[0]);setImageLocation(1)}}
                className={imgLoaction===1?'w-[80px] h-[80px] md:w-[110px] md:h-[110px] overflow-hidden rounded-md border-2 border-mainIconColor ml-2 cursor-pointer':'w-[80px] h-[80px] md:w-[110px] md:h-[110px] overflow-hidden rounded-md border-2 border-topBarTextColor ml-2 cursor-pointer'}
              >
                <img 
                  src={img[0]} 
                  alt="" 
                  className='w-full h-full'
                />
                {!load?(
                    <div 
                      className='w-full h-full bg-slate-100'
                    ></div>
                    ):(<></>)}
              </div>
              <div
                onClick={()=>{setImage(img[1]);setImageLocation(2)}}
                className={imgLoaction===2?'w-[80px] h-[80px] md:w-[110px] md:h-[110px] overflow-hidden rounded-md border-2 border-mainIconColor ml-2 cursor-pointer':'w-[80px] h-[80px] md:w-[110px] md:h-[110px] overflow-hidden rounded-md border-2 border-topBarTextColor ml-2 cursor-pointer'}
              >
                <img 
                  src={img[1]} 
                  alt="" 
                  className='w-full h-full'
                />
                {!load?(
                    <div 
                      className='w-full h-full bg-slate-100'
                    ></div>
                    ):(<></>)}
              </div>
              <div
                onClick={()=>{setImage(img[2]);setImageLocation(3)}}
                className={imgLoaction===3?'w-[80px] h-[80px] md:w-[110px] md:h-[110px] overflow-hidden rounded-md border-2 border-mainIconColor ml-2 cursor-pointer':'w-[80px] h-[80px] md:w-[110px] md:h-[110px] overflow-hidden rounded-md border-2 border-topBarTextColor ml-2 cursor-pointer'}
              >
                <img 
                  src={img[2]} 
                  alt="" 
                  className='w-full h-full'
                />
                {!load?(
                    <div 
                      className='w-full h-full bg-slate-100'
                    ></div>
                    ):(<></>)}
              </div>

            </div>
          </div>
        </div>

        <div
          className='w-full h-full px-4 mt-3 text-topBarTextColor'
        >
          <h1
            className='text-2xl font-medium font-serif'
          >{"Title"}</h1>
          <div 
            className='flex text-[#FACA51] my-2 text-lg mr-2'
          >
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <span className='text-center font-semibold text-topBarTextColor text-sm'>
                (  
                  <small>
                   { "6" } 
                  </small>
               )
            </span>
          </div>

          <h2
            className='text-xl font-medium'
          >
            BDT{" "}
            {"500"}
          </h2>

          <div
            className='flex w-full items-center'
          >
            <h2
              className='text-sm mr-4'
            >Size</h2>
            <div
              className='w-[30px] h-[30px] border flex justify-center items-center text-xs my-2 bg-[#5bff1a3b] mr-2'
            >
              S
            </div>
            <div
              className='w-[30px] h-[30px] border flex justify-center items-center text-xs my-2 mr-2'
            >
              M
            </div>
            <div
              className='w-[30px] h-[30px] border flex justify-center items-center text-xs my-2  mr-2'
            >
              L
            </div>
            <div
              className='w-[30px] h-[30px] border flex justify-center items-center text-xs my-2 mr-2'
            >
              XL
            </div>
          </div>

          <div 
            className='my-2 font-light'
          >
            <small>
              ({"20"}) Item's ar avalable
            </small>
            <br />
            <strong
            >
              Categories:  <small>{"T-shirt"}</small>
            </strong>
          </div>

          <div
            className='text-sm mb-5 font-mono'
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores doloribus mo....di aspernatur necessitatibus enim, ducimus provident autem ratione mollitia iste!
          </div>

          <div
            className='w-full flex justify-center items-center'
          >
            <button
              className=' w-[200px] h-[60px] rounded-md text-lg font-semibold mb-4 active:scale-95 bg-mainIconColor duration-100 ease-in-out'
            >Add to cart</button>
          </div>
          
        </div>





      </div>
    </div>
  )
}

export default ProductPage