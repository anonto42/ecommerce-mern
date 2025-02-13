import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import { MdStar, MdStarHalf, MdStarOutline, MdStarRate } from 'react-icons/md'
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';

const ProductPage = () => {
  let img = []
  const [productData , setProductData] = useState({})

  const [imgLoaction,setImageLocation] = useState(1)
  const [load,setLoad] = useState(false)
  const [searchParams] = useSearchParams();
  const productID = searchParams.get("id")

  useEffect(() => {
    if (!productID) return window.location.href = '/'

    ;(async () => {
      try {
        await axios.post(
          `${import.meta.env.VITE_REACT_SERVER_API}/user/product`,
          { id: productID }
        )
        // .then( rs => console.log(rs.data.data))
        .then( rs =>( setProductData(rs?.data?.data), setImage(rs?.data?.data?.images)))
        .catch( err => console.log(err))
      } catch (error) {
        console.log("Error fetching product:", error);
      }
    })();
    
  },[]);
  const avalableSizes = productData?.size?.split(" ");
  const [selectedSize, setSelectedSize] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
      productData?.images?.length > 0 ? setImage(productData.images[0]) : ""
  }, [productData]);

  
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

          <div
            className='w-[350px] md:w-[450px] md:h-[550px] mx-auto h-[450px] border-2 border-mainIconColor rounded-md overflow-hidden'
          >
            { !load?
              <div 
                className={`bg-slate-100 w-full h-full duration-100 ease-linear rounded-md  flex justify-center items-center`}
              >
                <RotatingLines color="#16b916" width='60px' />
              </div> : <></>
            }

            <img 
              src={image} 
              alt="#" 
              loading='lazy'
              className='w-full h-full'
            />
            
          </div>
          
          <div
            className='w-full pt-4 flex justify-center items-center'
          >
            <div
              className='flex'
            >
              {
                productData?.images?.map(( item , index )=>{
                  return(
                    <div
                      key={index}
                      onClick={()=>{setImage(item);setImageLocation(index+1)}}
                      className={ imgLoaction === (index+1) ?'w-[80px] h-[80px] md:w-[110px] md:h-[110px] overflow-hidden rounded-md border-2 border-mainIconColor ml-2 cursor-pointer relative':'w-[80px] h-[80px] md:w-[110px] md:h-[110px] overflow-hidden rounded-md border-2 border-topBarTextColor ml-2 cursor-pointer'}
                    >
                      {!load?
                        <div 
                        className={`bg-slate-100 w-full h-full duration-100 ease-linear rounded-md  flex justify-center items-center`}
                        >
                        <RotatingLines color="#16b916" width='30px' />
                      </div> : <></>
                      }
                      <img 
                        src={item} 
                        alt="" 
                        loading='lazy'
                        onLoad={()=>setLoad(true)}
                        className='w-full h-full'
                      />
                    </div>
                  )
                })
              }
              

            </div>
          </div>
        </div>

        <div
          className='w-full h-full px-4 mt-3 text-topBarTextColor'
        >
          <h1
            className='text-2xl font-medium font-serif'
          >{productData.name}</h1>
          <div 
            className='flex text-[#FACA51] my-2 text-lg mr-2'
          >
            {
              productData?.reviews?.length === 0 ? (<>
                <MdStarHalf />
                <MdStarOutline />
                <MdStarOutline />
                <MdStarOutline />
                <MdStarOutline />
              </>
                ):(
                <MdStarRate />
              )
            }
            <span className='text-center font-semibold text-topBarTextColor text-sm'>
                (  
                  <small>
                   { productData?.reviews?.length } 
                  </small>
               )
            </span>
          </div>

          <h2
            className='text-xl font-medium'
          >
            BDT{" "}
            {productData?.price}
          </h2>

          <div
            className='flex w-full items-center'
          >
            <h2
              className='text-sm mr-4'
            >Size:</h2>
            {
              avalableSizes?.map( (item , i ) =>{

                return(
                  <div
                    onClick={()=>setSelectedSize(item)}
                    key={i}
                    className={`w-[30px] h-[30px] border flex justify-center items-center text-xs my-2  mr-2 uppercase ${ selectedSize === item ? "bg-[#5bff1a3b]" : "bg-transparent"}`}
                  >
                    {item}
                </div>
                )
              })
            }
            
          </div>

          <div 
            className='my-2 font-light'
          >
            <small>
              ({ productData?.quantity }) Item's ar avalable
            </small>
            <br />
            <strong
            >
              Categories:  <small>{ productData?.category}</small>
            </strong>
          </div>

          <div
            className='text-sm mb-5 font-mono'
          >
            {
              productData?.description || "..."
            }.
          </div>

          <div
            className='w-full flex justify-center items-center'
          >
            <button
              className=' w-[150px] h-[55px] rounded-md text-lg font-semibold mb-4 active:scale-95 bg-mainIconColor duration-100 ease-in-out'
            >Add to cart</button>
          </div>
          
        </div>





      </div>
    </div>
  )
}

export default ProductPage