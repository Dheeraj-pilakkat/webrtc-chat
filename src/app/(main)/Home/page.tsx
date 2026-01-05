import React from 'react'
import Image from 'next/image'
import homeImg from 'public/home.png'
import { FaLaptopHouse, FaLock, FaVideo } from 'react-icons/fa'
import { MdScreenShare } from 'react-icons/md'

function page() {
  return (
    <div className=' bg-dark-900 container mx-auto '>
    <div className='flex container mx-auto h-screen items-center justify-center gap-4 '>
      <div className='text-gray-200  flex flex-col gap-6 '>
        <h1 className='text-5xl font-black'>Seamless Real-Time Communication,<br/>Powered by WebRTC</h1>
        <span> Our mission is to provide a seamless real-time communication experience using WebRTC technology and connect people world-wide together.</span>
        <div>
          <button className='bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition'>Get Started</button>
          <button className="bg-white/10  px-6 py-3 rounded-lg font-semibold ml-4 hover:bg-dark-700 transition">Learn More</button>
        </div>
      </div>
      <div>
        <Image src={homeImg} alt="Hero Image" width={800} height={400} className='rounded-lg shadow-lg shadow-black'/>
      </div>
    </div>
    <div className='flex  flex-col items-center text-gray-200 mb-10'>
      <h1 className='text-4xl font-medium underline underline-offset-5'>Everything you need to connect with others in real-time</h1>
      <div className='my-25 flex gap-10 justify-evenly '>
        <div className='border p-4 rounded-lg m-4'>
          <span>
            <FaVideo className='text-3xl mb-2 text-primary'/>
          </span>
          <h2 className='text-2xl mb-2 '>HD Video and Audio</h2>
          <p>Experience crystal-clear video and audio quality for your calls and conferences.</p>
        </div>
        <div className='border p-4 rounded-lg m-4'>
          <span>
            <FaLock className='text-3xl mb-2 text-primary'/>
          </span>
          <h2 className='text-2xl mb-2'>Secure Communication</h2>
          <p>Ensure your conversations remain private and secure with end-to-end encryption.</p>
        </div>
        <div className="border p-4 rounded-lg m-4">
          <span>
            <MdScreenShare className='text-3xl mb-2 text-primary'/>
          </span>
          <h2 className="text-2xl mb-2">Screen-sharing</h2>
          <p>Share your screen with others during calls for collaborative work and presentations.</p>
        </div>
        <div className='border p-4 rounded-lg m-4'>
          <span>
            <FaLaptopHouse className='text-3xl mb-2 text-primary'/>
          </span>
          <h2 className='text-2xl mb-2'>Cross-Platform support</h2>
          <p>Connect seamlessly across different devices and platforms without any hassle.</p>
        </div>
      </div>
    </div>
    <div className='flex h-full items-center text-gray-200 flex-col'>
      <h2 className="flex items-center text-4xl underline underline-offset-5"> Our Mission</h2>
      <p className=''>We believe in the power connection. Our goal is to break down the communication barrier and bring people</p>
    </div>
    </div>
  )
}

export default page
