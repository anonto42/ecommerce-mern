// import React, { useState } from 'react'
// import PaginationBar from './PaginationBar'
// import Product from '../Product/Product'
// import ShowCaseCart from '../Cart/ShowCaseCart'
// import { Link } from 'react-router-dom';

// const Pagination = ({products,catagory,catagorys,setCatagory}) => {
//     const array = [1,2,3,4,5,6,7,8,"..."]
//     const [pages,setPage] = useState(1)
//     const [items,setItems] = useState()

//     const filterProductsByCategory = (p, c) => p.filter( product =>  product.catagory === c)
//     const theFinalArray = filterProductsByCategory(products, catagory)


//   return (
//     <div
//         className='w-full min-h-[83vh] flex relative mb-6 pb-[00px]'
//     >
//       <div
//         className='minh-full w-[250px] bg-slate-300 pt-10 pl-10 hidden lg:block'
//       >
//         <h1
//           className='font-semibold font-serif text-2xl mb-3'
//         >Catagorys</h1>
//         <div>
//           <input type="radio" value={"All"} name={"item"} id={"ALl"} defaultChecked />
//           <label 
//             htmlFor={"All"} 
//             onClick={()=>{
//               setCatagory("All")
//               setPage(1)
//             }} 
//           className='text-lg text-gray-700 hover:text-gray-800 ml-2'
//           >{"All"}</label>
//         </div>
//         {
//           catagorys.map((item,index)=>{
//             return(
//               <div>
//                 <input type="radio" key={index} value={item} name={"item"} id={index} />
//                 <label 
//                   htmlFor={index} 
//                   onClick={()=>{
//                     setCatagory(item)
//                     setPage(1)
//                   }} 
//                 className='text-lg text-gray-700 hover:text-gray-800 ml-2'
//                 >{item}</label>
//               </div>
//             )
//           })
//         }
//       </div>
//       <div 
//         className='w-full h- grid grid-cols-1 relative mt-2'
//       >
//         <div
//           className='mx-auto'
//         >
//           <div
//             className='grid grid-cols-1 relative sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-6 md:grid-rows-2'
//           >
//           {
//             catagory === "All"?(
//               products.map(({price,title,images,reviews,count},index)=>{
//                 return(
//                   <Link to={`/product/${title}`}>
//                     <Product
//                       key={index}
//                       count={count}
//                       price={price}
//                       images={images}
//                       title={title}
//                       reviews={reviews}
//                       />
//                   </Link>
//                 )
//               })
//             ):(
//               theFinalArray.map(({price,title,images,reviews,count},index)=>{
//                 return(
//                   <Link to={`/product/${title}`}>
//                     <Product
//                       key={index}
//                       count={count}
//                       price={price}
//                       images={images}
//                       title={title}
//                       reviews={reviews}
//                       />
//                   </Link>
//                 )
//               })
//             )
//           }
//           </div>
//         </div>
//       </div>
//       <PaginationBar page={pages} array={array} setPage={setPage} />
//     </div>
//   )
// }

// export default Pagination



















import React, { useState } from "react";
import PaginationBar from "./PaginationBar";
import Product from "../Product/Product";
import ShowCaseCart from "../Cart/ShowCaseCart";
import { Link } from "react-router-dom";

const Pagination = ({ products, catagory, catagorys, setCatagory }) => {
  const [pages, setPage] = useState(1); // Current page
  const itemsPerPage = 8; // Number of items per page

  // Function to filter products by category
  const filterProductsByCategory = (p, c) =>
    c === "All" ? p : p.filter((product) => product.catagory === c);

  // Filtered products based on category
  const theFinalArray = filterProductsByCategory(products, catagory);

  // Pagination logic
  const startIndex = (pages - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = theFinalArray.slice(startIndex, endIndex);

  // Total pages calculation
  const totalPages = Math.ceil(theFinalArray.length / itemsPerPage);

  // Page numbers array for the pagination bar
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="w-full min-h-[83vh] flex relative mb-6 pb-[20px]">
      <div className="minh-full w-[250px] bg-slate-300 pt-10 pl-10 hidden lg:block">
        <h1 className="font-semibold font-serif text-2xl mb-3">Categories</h1>
        <div>
          <input
            type="radio"
            value={"All"}
            name={"item"}
            id={"All"}
            defaultChecked
          />
          <label
            htmlFor={"All"}
            onClick={() => {
              setCatagory("All");
              setPage(1);
            }}
            className="text-lg text-gray-700 hover:text-gray-800 ml-2"
          >
            {"All"}
          </label>
        </div>
        {catagorys.map((item, index) => {
          return (
            <div key={index}>
              <input type="radio" value={item} name={"item"} id={index} />
              <label
                htmlFor={index}
                onClick={() => {
                  setCatagory(item);
                  setPage(1);
                }}
                className="text-lg text-gray-700 hover:text-gray-800 ml-2"
              >
                {item}
              </label>
            </div>
          );
        })}
      </div>

      <div className="w-full h- grid grid-cols-1 relative mt-2">
        <div className="mx-auto pb-[100px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginatedProducts.map(
              ({ price, title, images, reviews, count }, index) => (
                <Link key={index} to={`/product/${title}`}>
                  <Product
                    count={count}
                    price={price}
                    images={images}
                    title={title}
                    reviews={reviews}
                  />
                </Link>
              )
            )}
          </div>
        </div>
        {/* Pagination Bar */}
        <PaginationBar
          page={pages}
          array={pageNumbers}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default Pagination;
