import React, { useState } from "react";
import PaginationBar from "./PaginationBar";
import Product from "../Product/Product";
import { Link } from "react-router-dom";

const Pagination = ({ products, catagory, catagorys, setCatagory }) => {
  const [pages, setPage] = useState(1);
  const itemsPerPage = 8;

  const filterProductsByCategory = (p, c) =>(
    c === "All" ? p : p.filter((product) => product.category === c)
  );
  const theFinalArray = filterProductsByCategory(products, catagory);

  const startIndex = (pages - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = theFinalArray.slice(startIndex, endIndex);

  const totalPages = Math.ceil(theFinalArray.length / itemsPerPage);

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
