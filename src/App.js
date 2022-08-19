
import './App.css';
import Spline from '@splinetool/react-spline'
import { useState } from 'react'
import { IoMenu } from 'react-icons/io5'

function App() {
  const [isActive, setIsActive] = useState(false)

  return (


    <div className='flex w-screen h-screen min-h-screen flex-row items-center justify-center relative bg-primary '>
      <nav className='w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center'>
        <div className='w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center'>
          <p className='text-lg text-white font-medium'>Aakash</p>

          <div className='hidden md:flex items-center gap-6 ml-6 flex-1'>
            <a href='#home' className='text-base text-white font-medium hover:text-flate-100 cursor-pointer duration-100'>Home</a>

            <a href='#about' className='text-base text-white font-medium hover:text-flate-100 cursor-pointer duration-100'>About</a>

            <a href='#Contact' className='text-base text-white font-medium hover:text-flate-100 cursor-pointer duration-100'>Contact</a>

            <a href='#More' className='text-base text-white font-medium hover:text-flate-100 cursor-pointer duration-100'>More</a>

            <a href='#download' className='ml-auto text-white font-medium hover:text-slate-50 cursor-pointer border border-textbase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out'> Download</a>
          </div>

          <div className='block md:hidden ml-auto  cursor-pointer' onClick={() => setIsActive(!isActive)}>
            <IoMenu className='text-2xl text-white' />
          </div>

          {isActive && (
            <div className='p-4 w-275 navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6'>
              <a href='#home' className='text-base text-white font-medium hover:text-flate-100 cursor-pointer duration-100' onClick={() => { setIsActive(false) }}>Home</a>

              <a href='#about' className='text-base text-white font-medium hover:text-flate-100 cursor-pointer duration-100' onClick={() => { setIsActive(false) }}>About</a>

              <a href='#Contact' className='text-base text-white font-medium hover:text-flate-100 cursor-pointer duration-100' onClick={() => { setIsActive(false) }}>Contact</a>

              <a href='#More' className='text-base text-white font-medium hover:text-flate-100 cursor-pointer duration-100' onClick={() => { setIsActive(false) }}>More</a>

              <a href='#download' className='ml-auto text-white font-medium hover:text-slate-50 cursor-pointer border border-textbase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out' onClick={() => { setIsActive(false) }}> Download</a>
            </div>
          )}
        </div>

      </nav>


      <div className='rocknroll'>
        <div className='relative' id='home'>
          {/* <Spline scene="https://prod.spline.design/EnNQWNiURp43-PXH/scene.splinecode" /> */}
          {/* <Spline scene="https://prod.spline.design/5Nk72UfwktZm8eNj/scene.splinecode" /> */}
          {/* <Spline scene="https://prod.spline.design/5Nk72UfwktZm8eNj/scene.splinecode" /> */}
          <Spline scene="https://prod.spline.design/3NwSlhunR78LM1wE/scene.splinecode" />
        </div>
        {/* <div className='second'>
          <h1 className="text-3xl font-bold ">
            Rock n' Roll
          </h1>
        </div> */}
      </div>

      {/* <div className='w-full h-10 bg-white z-10 about'>
        <section className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24' id='about'>
          <div className='w-full h-420 flex items-center justify-center'>
            <div className='w-275 h-340 bg-emerald-300 text-white rounded-md inside-about'>
              <div className='txt'>HNIdeuh</div>
              <div className='model'>
                <Spline scene="https://prod.spline.design/EnNQWNiURp43-PXH/scene.splinecode" />
              </div>
            </div>
          </div>
          <div>

          </div>
        </section>
      </div> */}
    </div>
  );
}

export default App; 
