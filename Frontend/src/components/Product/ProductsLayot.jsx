import React from 'react'
import { Link } from 'react-router-dom';
import ShowCaseCart from './../Cart/ShowCaseCart';

const ProductsLayot = ({allProducts,showCaseName}) => {
  return (
    <div 
        className='w-full h-full'
    >
        <div
        className='max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 xl:px-0 h-full pt-4 sm:pt-8 md:pt-10'
      >
        <h1 
            className='text-topBarTextColor text-2xl sm:text-3xl md:text-4xl font-semibold font-serif'>
              {
                showCaseName
              }
        </h1>
      </div>
      <div
        className='max-w-[1400px] mx-auto h-auto grid mt-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'
      >
        {
          allProducts.map((item,index)=>{
            const {price,title,images,reviews} = item
            return(
              <Link to={""} key={index}>
                <div className='w-[200px] h-[250px] mb-4 mx-auto'>
                  <ShowCaseCart
                    images={images}
                    price={price}
                    reviews={reviews}
                    title={title}
                  />
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductsLayot