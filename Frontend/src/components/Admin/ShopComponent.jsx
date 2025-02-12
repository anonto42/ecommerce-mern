import React, { useState } from 'react'
import { Hourglass } from 'react-loader-spinner';
import axios from 'axios';
import { toast } from "react-toastify";
import { useSelector } from 'react-redux';

const ShopComponent = () => {
  const [imageFils, setImageFiles] = useState(null);
  const [imgLoading,setImgLoading] = useState(false);
  const [allImgLoading,setAllImgLoading] = useState(false);
  const [loading,setLoading] = useState(false);
  const [title,setTitle] = useState("");
  const [price,setPrice] = useState("");
  const [size,setSize] = useState("");
  const [tag,setTag] = useState("");
  const [catagory,setCatagory] = useState("");
  const [quantity,setQuantity] = useState("");
  const [discription,setDiscription] = useState("");
  const [sizeSplitData,setPartsData] = useState();
  // this variable is if the update product 
  const [serchArgument,setArgument] = useState("");
  const [serchLoading,setSerchLoading] = useState(false);
  const [UimageFils, setUImageFiles] = useState([]);
  const [Utitle,UsetTile] = useState("");
  const [Uprice,UsetPrice] = useState("");
  const [Usize,UsetSize] = useState("");
  const [Utag,UsetTag] = useState("");
  const [Ucatagory,UsetCatagory] = useState("");
  const [Uquantity,UsetQuantity] = useState("");
  const [Udiscription,UsetDiscription] = useState("");
  const [selectedImage,setSelectedImages] = useState(false);
  // get the data from backend
  const { allProducts } = useSelector( store => store.applicationData.adminData);
  
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
      formData.append("tag",tag);
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
      setTag("");
      setImageFiles(null);
      setLoading(false);
      
      
    } catch (error) {
      setLoading(false)
      console.log(error)
      toast.error("Something went wrong! Please try again",{position:"bottom-center"});
    }
  }

  const getAProductForUpdate = async () => {
    try {
      setSerchLoading(true);
      
      const rs = await axios.post(`${import.meta.env.VITE_REACT_SERVER_API}/admin/sproduct`,{ name : serchArgument },{withCredentials: true,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*' // This is for CORS
        }
      })
      
      setUImageFiles(rs.data.data.images)
      UsetPrice(rs.data.data.price)
      UsetSize(rs.data.data.size)
      UsetTile(rs.data.data.name)
      UsetTag(rs.data.data.tagOfEvent)
      UsetCatagory(rs.data.data.category)
      UsetQuantity(rs.data.data.quantity)
      UsetDiscription(rs.data.data.description)
      console.log(rs.data.data)



      toast.success("Product Found Successfully",{position:"bottom-center"}) 
      setSerchLoading(false);
    } catch (error) {
      setSerchLoading(false)
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
          {
            allProducts.map((item,index)=>{
              return(
                    <div
                      key={index}
                        className='w-[800px] mt-4 min-h-[80px] border-b border-lime-200 mx-auto'
                    >
                      <div
                        className='mx-auto h-auto w-auto'
                      >
                        <div
                          className='w-[220px] mx-auto h-[300px] relative'
                        >
                          <div className={`absolute w-[220px] mx-auto h-[300px] bg-slate-50 duration-100 ease-linear ${!allImgLoading?"opacity-100":"opacity-0"}`}></div>
                          <img 
                            src={item.images[0]} 
                            alt="" 
                            loading='lazy'
                            onLoad={()=>setAllImgLoading(true)}
                            className='w-full h-full'
                          />
                        </div>

                      </div>

                  <div
                    className='mt-4 md:flex justify-around'
                  >
                    <h3
                      className='text-lg'
                    >
                      Title:<span className='underline font-mono'> {item.name}</span>
                    </h3>

                    <h3
                      className='text-lg'
                    >Sizes:<span className='underline font-mono'> {item.size}</span></h3>

                    <h3
                      className='text-lg'
                    >Price:<span className='underline font-mono'> {item.price}</span> BDT</h3>
                  </div>

                  <div
                    className='mt-4 md:flex justify-around'
                  >
                    <h3
                      className='text-lg'
                    >
                      category: <span className='underline font-mono'>{item.category} </span>
                    </h3>

                    <h3
                      className='text-lg'
                    >Quantity: <span className='underline font-mono'>{item.quantity}</span>{" "}PCS</h3>

                    <h3
                      className='text-lg'
                    >Created-at: <span className='underline font-mono'>{item.createdAt}</span></h3>
                  </div>

                  <div
                    className='mt-4 md:flex justify-around mb-4'
                  >
                    <h3
                      className='text-lg'
                    >
                      ID:  <span className='underline font-mono'>{item._id}</span>
                    </h3>

                    <h3
                      className='text-lg'
                    >
                      Tag:  <span className='underline font-mono'>{item.tagOfEvent}</span>
                    </h3>

                    <h3
                      className='text-lg'
                    >Created-by : <span className='underline font-mono'>{item.creator}</span></h3>
                  </div>

                </div>
              )
            })
          }
          


        </div>
      </div>

      {/* Update Product's */}
      <div
        className='w-full min-h-[20vh] mt-8'
      >
        <h1
        className='text-2xl'>Update Product :</h1>

        {/* Serch Product */}
        <div className=''>
          
          <div
            className='md:w-[350px] w-[250px] h-[50px] mt-4 rounded-lg overflow-hidden font-serif'
          >
            <input 
              type="text" 
              value={serchArgument}
              onChange={(e)=>setArgument(e.target.value)}
              className='h-full outline-none px-4 text-lg w-[80%] text-textDarkColor'
              placeholder='Search Product by Title or ID'
              />
            <button
              onClick={()=>getAProductForUpdate()}
              className='w-[20%] h-[53px] bg-blue-400 active:bg-blue-600 ease-linear duration-150 text-white hover:bg-blue-500'
            >Search</button>
          </div>
        </div>


        {/* serch resuld */}
        <div
          className='overflow-x-auto min-h-[440px] relative'
        >
          {
            serchLoading?(
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
          {/* Dufalt value */}
          <h1
            className='text-xl p-4'
          >No search resuld...</h1>

          {/* Product */}
          <div
            className='p-3 min-w-[900px] border overflow-auto rounded-xl'
          >
            <div>
              <div
                className='flex justify-around'
              >
                <div>
                  <div
                    className='flex h-[150px]'
                  >
                    {
                      UimageFils?
                      selectedImage?
                      Array.from(UimageFils).map((item, index) =>{
                        return(
                          <img 
                            src={URL.createObjectURL(item) || item} 
                            key={index}
                            className='w-[110px] h-[150px] mr-1'
                          />
                        )
                      }):(
                        UimageFils.map((item, index) =>{
                          return(
                            <img 
                              src={item} 
                              key={index}
                              className='w-[110px] h-[150px] mr-1'
                            />
                          )
                        })
                      ):<></>
                    }
                  </div>
                  {/* Image files for updatet the product images */}
                  <input 
                    onChange={e =>{ return setUImageFiles(e.target.files) , setSelectedImages(true)} }
                    className='mt-2'
                    placeholder='Change the Main file'
                    type="file"
                    multiple
                  />
                  <h2
                    className='mt-3 font-semibold'
                  >Quantity <span className='text-xl'>{Uquantity}</span></h2>
                  <input 
                    type="text" 
                    value={Uquantity}
                    onChange={(e)=>UsetQuantity(e.target.value)}
                    placeholder='Update the Quantity'
                    className='w-[240px] h-[40px] px-3 rounded-xl my-2 outline-none text-textDarkColor'
                  />
                </div>
                <div>
                  <h3>Title: {Utitle}</h3>
                  <input 
                    className='w-[240px] h-[40px] px-3 rounded-xl my-2 outline-none text-textDarkColor'
                    type="text" 
                    placeholder='The name of the product.'
                    value={Utitle}
                    onChange={(e)=>UsetTile(e.target.value)}
                  />
                  <h3>Price: {Uprice}</h3>
                  <input 
                    className='w-[240px] h-[40px] px-3 rounded-xl my-2 outline-none text-textDarkColor'
                    type="text" 
                    placeholder='The price of the product.'
                    value={Uprice}
                    onChange={e => UsetPrice(e.target.value)} 
                  />
                  <h3>Category: {Ucatagory}</h3>
                  <input 
                    className='w-[240px] h-[40px] px-3 rounded-xl my-2 outline-none text-textDarkColor'
                    type="text" 
                    placeholder='Category of the product.'
                    value={Ucatagory}
                    onChange={(e)=>UsetCatagory(e.target.value)}  
                  />
                </div>
                <div>
                  <h3>Size: {Usize}</h3>
                  <input 
                    className='w-[240px] h-[40px] px-3 rounded-xl my-2 outline-none text-textDarkColor'
                    type="text" 
                    placeholder='Size of product.'
                    value={Usize}
                    onChange={ e=> UsetSize(e.target.value)} 
                  />
                  <h3>Tag: {Utag}</h3>
                  <input 
                    className='w-[240px] h-[40px] px-3 rounded-xl my-2 outline-none text-textDarkColor'
                    type="text" 
                    placeholder='Tag for show'
                    value={Utag}
                    onChange={e=> UsetTag(e.target.value)}  
                  />
                  <h3>Driscription:</h3>
                  <textarea
                    className='w-[240px] min-h-[60px] pt-1 px-3 rounded-xl my-2 outline-none text-textDarkColor'
                    type="text"
                    placeholder='Driscription.'
                    onChange={e=> UsetDiscription(e.target.value)}
                    value={Udiscription}
                    />
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
            </div>
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
            {/* Event tag of the product */}
            <div>
              <input 
                type="text" 
                value={tag}
                onChange={ e => setTag(e.target.value)} 
                placeholder='Tag for the product'
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