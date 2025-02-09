import axios from 'axios';
import React, { useState } from 'react'
import { Hourglass } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const SetingsComponent = () => {
  const [ loading , setLoading ] = useState(false);
  const [ imgLoading , setImgLoading ] = useState(false);
  const [ imgFiles , setImgFiles ] = useState();
  const  { heroData } = useSelector( event => event.applicationData.appData );
  const [ heroText ,setHeroText] = useState(heroData.topText);


  const handleHerodataSubmit = async (e) => {
    // e.preventDefault();
    setLoading(true);
    try {
      if(Array.from(imgFiles).length <= 0) return toast.error("You must give at least one image") , setLoading(false)
      const formData = new FormData();
      for (const file of imgFiles) {
        formData.append('heroImages', file);
      }
      formData.append("topText",heroText)
      
      // console.log(formData.getAll("heroImages"))

      const responce = await axios.put(`${import.meta.env.VITE_REACT_SERVER_API}/admin/hero`,formData,
      {
        withCredentials: true,
        headers: { 
          'Content-Type':'multipart/form-data',
          'Access-Control-Allow-Origin': '*' ,
        }
      })
      
      if (!responce) {
        toast.error(`HTTP error! status: ${responce.status}`);
      }
      
      setLoading(false);
      toast.success(responce.data.message);
      
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.dark("Failed to update hero data!") 
    }
  }

  return (
    <div
      className='w-full min-h-[120svh] text-topBarTextColor'
    >
      <h1
        className='text-2xl p-4 font-semibold'
      >Upload Product...</h1>
      <div 
        className='max-w-[800px] h-[57svh] pl-5'
      >
        <form action="">
          <div
            className='w-full h-full text-textDarkColor'
          >
            <div
              className='flex'
            >
              <img 
                src="" 
                alt=""
                className='w-[100px] mr-4 h-[150px]'
              />
            </div>
            <input
              multiple
              type='file'
              className='w-full h-full mt-4'
            />
            <div>
              <input 
                type="text" 
                name="" id="" 
                placeholder='Inter the title of the product'
                className='w-[250px] xl:w-[350px] h-[40px] rounded-md outline-none px-2 mt-2'
              />
            </div>
            <div>
              <input 
                type="text" 
                name="" id="" 
                placeholder='Inter the price'
                className='w-[250px] xl:w-[350px] h-[40px] rounded-md outline-none px-2 mt-2'
              />
            </div>
            <div>
              <input 
                type="text" 
                name="" id="" 
                placeholder='Catagory of the product'
                className='w-[250px] xl:w-[350px] h-[40px] rounded-md outline-none px-2 mt-2'
              />
            </div>
            <div>
              <input 
                type="text" 
                name="" id="" 
                placeholder='Quantity of the product'
                className='w-[250px] xl:w-[350px] h-[40px] rounded-md outline-none px-2 mt-2'
              />
            </div>
            <div>
              <textarea 
                type="text" 
                name="" id="" 
                rows={4}
                placeholder='Description'
                className='w-[250px] xl:w-[350px] h-[40px] rounded-md outline-none px-2 mt-2'
              />
            </div>
            <button
              className='w-[120px] h-[50px] font-semibold text-lg rounded-lg hover:bg-blue-600 active:scale-105 text-topBarTextColor bg-blue-500'
            >Public</button>
          </div>
        </form>
      </div>


      <div
        className='w-full h-full p-6 text-topBarTextColor'
      >
        
      <h1
        className='mt-8 md:mt-4 text-xl font-semibold'
      >Uplated hero section :-{">"} </h1>
      <div
        className='w-full relative'
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
          className='mx-auto w-full overflow-auto min-h-[410px] bg-navebarBgColor mt-4 rounded-xl pl-4 md:pl-0'
        >
          {/* hero */}
          <div
            className='p-3 overflow-auto h-full w-full rounded-xl'
          >

              <h2
                className='text-xl font-semibold mb-2'
              >Existing images :</h2>

              <div
                className='flex flex-wrap'
              >

                {/*image box */}
                {
                  heroData.images.map((item, index) => (
                    <div key={index} className='w-[160px] border-2 mr-2 h-[110px] relative rounded-md overflow-hidden'>
                      <div
                        className={`w-full h-full bg-slate-100 duration-100 ease-linear absolute ${!imgLoading? "opacity-100":"opacity-0"}`}
                      />
                      <img 
                        src={item} 
                        loading='lazy'
                        onLoad={()=>setImgLoading(true)}
                        className='w-full h-full'
                      />
                    </div>
                  ))
                }
              </div>

              <h2 className='py-3 font-semibold text-xl'>Selected images :</h2>

              <div
                className='flex flex-wrap'
              >
                {
                  imgFiles? Array.from(imgFiles).map((item, index) => (
                    <div key={index} className='w-[160px] border-2 m-2 h-[110px] relative rounded-md overflow-hidden'>
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
                  )) : <h2 className='h-[100px] items-center grid font-mono font-bold text-xl'>NO images selected.</h2>
                }
              </div>

                <h2
                  className='mt-3 font-semibold'
                >Select images for  <span className='text-lg'>{"Hero Section"}</span></h2>
                  <input
                    onChange={(e)=>setImgFiles(e.target.files) }
                    className='mt-2'
                    placeholder=''
                    type="file"
                    multiple
                  />
                  <div>
                    <h2
                      className='mt-3 font-semibold'
                    >Main Text.. <span className='text-sm'>({heroData.topText})</span></h2>
                    <textarea 
                      value={heroText}
                      onChange={(e)=>setHeroText(e.target.value)}
                      type="text" 
                      name="" id="" 
                      placeholder='This is the main text of the application header'
                      className='w-[440px] min-h-[70px] pt-1 px-3 rounded-xl my-2 outline-none text-textDarkColor'
                    />
                  </div>
              <div
                className='flex justify-center mt-5'
              >
                <button
                  onClick={()=>handleHerodataSubmit()}
                  className='w-[80px] h-[40px] bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 active:scale-105 mr-4'
                >Update</button>
              </div>
              
          </div>
        </div>
      </div>

      {/* Product's */}
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

    </div>


    </div>
  )
}

export default SetingsComponent