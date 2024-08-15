import React from 'react'
import { Button } from './ui/button'

const Contact = () => {
  return (
    <div id='contact'>
    <h1 className="font-bold text-2xl mb-7 text-center text-[#0895A1]">Contact</h1>
    <form className=' w-full flex justify-center items-center space-y-9 flex-col'>
       <div className='flex flex-col space-y-2'> <label htmlFor="name">Name</label>
       <input className='text-black py-2 px-4 rounded' id='name'/></div>
       <div className='flex flex-col space-y-2'> <label htmlFor="email">Email</label>
       <input className='text-black py-2 px-4 rounded' id='email'/></div> <div className='flex flex-col space-y-2'> <label htmlFor="msg">Message</label>
       <textarea id='msg' cols={25} rows={4}> </textarea>
    </div>
    <Button variant='custom'>Submit</Button>
    </form>
    </div>
  )
}

export default Contact