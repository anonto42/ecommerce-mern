import React, { useState } from 'react'
import { Hourglass } from 'react-loader-spinner';
import axios from 'axios';
import { toast } from "react-toastify";

const ShopComponent = () => {
  const [imageFils, setImageFiles] = useState(null);
  const [imgLoading,setImgLoading] = useState(false);
  const [loading,setLoading] = useState(false);
  const [title,setTitle] = useState("");
  const [price,setPrice] = useState("");
  const [size,setSize] = useState("");
  const [catagory,setCatagory] = useState("");
  const [quantity,setQuantity] = useState("");
  const [discription,setDiscription] = useState("");
  const [sizeSplitData,setPartsData] = useState();
  
  const publicAProduct = async () => {
    try {
      setLoading(true);
      setPartsData(
        size.split(" ")
      )
      if (!imageFils || title === "" || price === "" || size === "" || catagory === "" || quantity === "" || discription === "") {
        return toast.error("All fields are required!") , setLoading(false);
      }
      const formData = new FormData();
      for(const files of imageFils){
        formData.append('images',files);
      }
      formData.append("name",title);
      formData.append("price",price);
      formData.append("size",sizeSplitData);
      formData.append("category",catagory);
      formData.append("quantity", quantity);
      formData.append("description", discription);
      
      // send request to server
      await axios.post(`${import.meta.env.VITE_REACT_SERVER_API}/admin/product`,formData,{
        withCredentials: true,
        headers: { 
          'Content-Type':'multipart/form-data',
          'Access-Control-Allow-Origin': '*' ,
        }}
      )
      
      toast.success("Product Created Successfully",{position:"bottom-center"})

      setCatagory("");
      setTitle("");
      setPrice("");
      setSize("");
      setQuantity("");
      setDiscription("");
      setImageFiles(null);
      setLoading(false);
      
      
    } catch (error) {
      setLoading(false)
      console.log(error)
      toast.error("Something went wrong! Please try again",{position:"bottom-center"});
    }
  }

  return (
    <div
      className='w-full h-full p-6 text-topBarTextColor'
    >
      <div
        className='w-full h-[30px] flex'
      >
        <h1
          className='text-2xl font-semibold mr-2'
        >Total Products's : {"20"} </h1>
      </div>

      <h1
        className='mt-8 md:mt-4 text-xl font-semibold'
      >Product's :-{">"} </h1>

      {/* All Product's */}
      <div
        className='w-full'
      >
        <div
          className='mx-auto  overflow-auto h-[500px] bg-navebarBgColor mt-4 rounded-xl pl-4 md:pl-0'
        >

          {/* Product's sheat */}
          <div
            className='w-[800px] mt-4 min-h-[80px] border-b border-lime-200 mx-auto'
          >
            <div
              className='mx-auto h-auto w-auto'
            >
              <img 
                src="" 
                alt="" 
                className='w-[220px] mx-auto h-[300px]'
              />

            </div>

            <div
              className='mt-4 md:flex justify-around'
            >
              <h3
                className='text-lg'
              >
                Title :<span className='underline font-mono'> {"Title the name of the product"}</span>
              </h3>

              <h3
                className='text-lg'
              >Price :<span className='underline font-mono'> {"500"}</span> BDT</h3>
            </div>

            <div
              className='mt-4 md:flex justify-around'
            >
              <h3
                className='text-lg'
              >
                category : <span className='underline font-mono'>{"T-shirt"} </span>
              </h3>

              <h3
                className='text-lg'
              >Quantity : <span className='underline font-mono'>{"12"}</span>{" "}PCS</h3>

              <h3
                className='text-lg'
              >Created-at : <span className='underline font-mono'>{"12/3/2024"}</span></h3>
            </div>

            <div
              className='mt-4 md:flex justify-around mb-4'
            >
              <h3
                className='text-lg'
              >
                ID :  <span className='underline font-mono'>{"sdfaskoi23lk3456ho2543i6"}</span>
              </h3>

              <h3
                className='text-lg'
              >Created-by : <span className='underline font-mono'>{"Admin-ssddd"}</span></h3>
            </div>

          </div>

          <div
            className='w-[800px] mt-4 min-h-[80px] border-b border-lime-200 mx-auto'
          >
            <div
              className='mx-auto h-auto w-auto'
            >
              <img 
                src="" 
                alt="" 
                className='w-[220px] mx-auto h-[300px]'
              />

            </div>

            <div
              className='mt-4 md:flex justify-around'
            >
              <h3
                className='text-lg'
              >
                Title :<span className='underline font-mono'> {"Title the name of the product"}</span>
              </h3>

              <h3
                className='text-lg'
              >Price :<span className='underline font-mono'> {"500"}</span> BDT</h3>
            </div>

            <div
              className='mt-4 md:flex justify-around'
            >
              <h3
                className='text-lg'
              >
                category : <span className='underline font-mono'>{"T-shirt"} </span>
              </h3>

              <h3
                className='text-lg'
              >Created-at : <span className='underline font-mono'>{"12/3/2024"}</span></h3>
            </div>

            <div
              className='mt-4 md:flex justify-around mb-4'
            >
              <h3
                className='text-lg'
              >
                ID :  <span className='underline font-mono'>{"sdfaskoi23lk3456ho2543i6"}</span>
              </h3>

              <h3
                className='text-lg'
              >Created-by : <span className='underline font-mono'>{"Admin-ssddd"}</span></h3>
            </div>

          </div>

          <div
            className='w-[800px] mt-4 min-h-[80px] border-b border-lime-200 mx-auto'
          >
            <div
              className='mx-auto h-auto w-auto'
            >
              <img 
                src="" 
                alt="" 
                className='w-[220px] mx-auto h-[300px]'
              />

            </div>

            <div
              className='mt-4 md:flex justify-around'
            >
              <h3
                className='text-lg'
              >
                Title :<span className='underline font-mono'> {"Title the name of the product"}</span>
              </h3>

              <h3
                className='text-lg'
              >Price :<span className='underline font-mono'> {"500"}</span> BDT</h3>
            </div>

            <div
              className='mt-4 md:flex justify-around'
            >
              <h3
                className='text-lg'
              >
                category : <span className='underline font-mono'>{"T-shirt"} </span>
              </h3>

              <h3
                className='text-lg'
              >Created-at : <span className='underline font-mono'>{"12/3/2024"}</span></h3>
            </div>

            <div
              className='mt-4 md:flex justify-around mb-4'
            >
              <h3
                className='text-lg'
              >
                ID :  <span className='underline font-mono'>{"sdfaskoi23lk3456ho2543i6"}</span>
              </h3>

              <h3
                className='text-lg'
              >Created-by : <span className='underline font-mono'>{"Admin-ssddd"}</span></h3>
            </div>

          </div>


        </div>
      </div>

      {/* Update Product's */}
      <div
        className='w-full min-h-[20vh] mt-8'
      >
        <h1
        className='text-2xl'>Update Product :</h1>

        {/* Serch Product */}
        <form action="">
          <div
            className='md:w-[350px] w-[250px] h-[50px] mt-4 rounded-lg overflow-hidden font-serif'
          >
            <input 
              type="text" 
              className='h-full outline-none px-4 text-lg w-[80%] text-textDarkColor'
              placeholder='Search Product by Title'
              />
            <button
              className='w-[20%] h-[53px] bg-blue-400 text-white hover:bg-blue-500'
            >Search</button>
          </div>
        </form>


        {/* serch resuld */}
        <div
          className='w-full h-[440px]'
        >
          {/* Dufalt value */}
          <h1
            className='text-xl p-4'
          >No search resuld...</h1>

          {/* Product */}
          <div
            className='p-3 border overflow-auto w-full rounded-xl'
          >
            <form action="" >
              <div
                className='flex'
              >
                <div>
                  <img 
                    src="" 
                    className='w-[110px] h-[150px]'
                  />
                  <input 
                    className='mt-2'
                    placeholder='Change the Main file'
                    type="file"
                  />
                  <h2
                    className='mt-3 font-semibold'
                  >Quantity <span className='text-xl'>{"11"}</span></h2>
                  <input 
                    type="text" 
                    name="" id="" 
                    placeholder='Update the Quantity'
                    className='w-[240px] h-[40px] px-3 rounded-xl my-2 outline-none text-textDarkColor'
                  />
                </div>
                <div>
                  <h3>Title : {"The name of the product"}</h3>
                  <input 
                    className='w-[240px] h-[40px] px-3 rounded-xl my-2 outline-none text-textDarkColor'
                    type="text" 
                    placeholder='The name of the product.'
                    name="" id="" 
                  />
                  <h3>Price : {"399"} BDT</h3>
                  <input 
                    className='w-[240px] h-[40px] px-3 rounded-xl my-2 outline-none text-textDarkColor'
                    type="text" 
                    placeholder='The price of the product.'
                    name="" id="" 
                  />
                  <h3>Category : {"T-shirt"}</h3>
                  <input 
                    className='w-[240px] h-[40px] px-3 rounded-xl my-2 outline-none text-textDarkColor'
                    type="text" 
                    placeholder='Category of the product.'
                    name="" id=""/>
                </div>
              </div>
              <div
                className='flex justify-center mt-5'
              >
                <button
                  className='w-[80px] h-[40px] bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 active:scale-105 mr-4'
                >Update</button>
                <button
                  className='w-[80px] h-[40px] bg-red-500 text-white font-bold rounded-md hover:bg-red-600 active:scale-105'
                >Delete</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Create Product */}

      <h1
        className='text-2xl p-4 font-semibold'
      >Upload Product...</h1>
      <div 
        className='max-w-[800px] min-h-[57svh] pl-5 relative'
      >
        {
          loading?(
            <div className='absolute h-full w-full z-40 bg-[#272525a4] flex justify-center items-center rounded-xl'>
              <Hourglass
                visible={true}
                height="60"
                width="60"
                ariaLabel="hourglass-loading"
                wrapperClass=""
                colors={['#2db12d', '#72a1ed']}
              />
            </div>
          ):(<></>)
          }
          <div
            className='w-full h-full text-textDarkColor'
          >
            {/* Images */}
            <div
              className='flex'
            >
              {
                  imageFils? Array.from(imageFils).map((item, index) => (
                    <div key={index} className='w-[110px] border-2 mt-2 mr-2 h-[150px] relative rounded-md overflow-hidden'>
                      <div
                        className={`w-full h-full bg-slate-100 duration-100 ease-linear absolute ${!imgLoading? "opacity-100":"opacity-0"}`}
                      />
                      <img 
                        src={URL.createObjectURL(item)} 
                        loading='lazy'
                        onLoad={()=>setImgLoading(true)}
                        className='w-full h-full'
                      />
                    </div>
                  )) : <div className='w-[110px] border-2 mt-2 mr-2 h-[150px] relative rounded-md overflow-hidden text-white text-sm p-4'>NO images selected.</div>
                }
            </div>
              {/* File selection fild */}
            <div>
              <input
                onChange={ e => setImageFiles( e.target.files )}
                multiple
                type='file'
                className='w-full h-full mt-4'
              />
            </div>
            {/* Name of the product file */}
            <div>
              <input 
                type="text" 
                value={title}
                onChange={ e => setTitle(e.target.value)}
                placeholder='Inter the title of the product'
                className='w-[250px] xl:w-[350px] h-[40px] rounded-md outline-none px-2 mt-2'
              />
            </div>
            {/* Price of the product */}
            <div>
              <input 
                type="text" 
                value={price}
                onChange={ e => setPrice(e.target.value)}
                placeholder='Inter the price'
                className='w-[250px] xl:w-[350px] h-[40px] rounded-md outline-none px-2 mt-2'
              />
            </div>
            {/* Sizes of the product */}
            <div>
              <input 
                type="text" 
                value={size}
                onChange={ e => setSize(e.target.value)} 
                placeholder='Inter the sizes'
                className='w-[250px] xl:w-[350px] h-[40px] rounded-md outline-none px-2 mt-2'
              />
            </div>
            {/* Catagory of the product */}
            <div>
              <input 
                type="text" 
                value={catagory}
                onChange={ e => setCatagory(e.target.value)}
                placeholder='Catagory of the product'
                className='w-[250px] xl:w-[350px] h-[40px] rounded-md outline-none px-2 mt-2'
              />
            </div>
            {/* Quantity of the product */}
            <div>
              <input 
                type="text" 
                value={quantity}
                onChange={ e => setQuantity(e.target.value)} 
                placeholder='Quantity of the product'
                className='w-[250px] xl:w-[350px] h-[40px] rounded-md outline-none px-2 mt-2'
              />
            </div>
            {/* Discription */}
            <div>
              <textarea 
                type="text" 
                value={discription}
                onChange={ e => setDiscription(e.target.value)}
                placeholder='Description'
                className='w-[250px] xl:w-[350px] h-[80px] rounded-md outline-none px-2 mt-2'
              />
            </div>
            <button
              onClick={()=>publicAProduct()}
              className='w-[120px] h-[50px] font-semibold text-lg rounded-lg hover:bg-blue-600 active:scale-105 text-topBarTextColor bg-blue-500'
            >Public</button>
          </div>

      </div>




    </div>
  )
}

export default ShopComponent